package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

const PORT = ":8085"
const IS_READY = false 

type RequestData struct {
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Content string `json:"content"`
	Name string `json:"name"`
}

type BrevoMailer struct {
	HtmlContent string `json:"htmlContent"`
	Sender Sender `json:"sender"`
	Subject string `json:"subject"`
	To []To `json:"to"`
}

type Sender struct {
	Email string `json:"email"`
	Name string  `json:"name"`
}

type To struct {
	Email string `json:"email"`
	Name string `json:"name"`
}

func main() {
	// load env variable
	// err := godotenv.Load()
	// if err != nil {
	// 	log.Fatal("Error loading .env file")
	// }
	_ = godotenv.Load()

	// routes
	http.HandleFunc("GET /", healthCheck)
	// http.HandleFunc("OPTIONS /send-email", optionsHandler)
	http.HandleFunc("POST /send-email", sendEmail)

	// start server
	fmt.Println("Katmail is listening")
	http.ListenAndServe(PORT, corsMiddleware(http.DefaultServeMux))
}

func healthCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "server is running")
}

func sendEmail(w http.ResponseWriter, req *http.Request) {

	// enableCors(w)
  log.Printf("Method: %s, Content-Type: %s", req.Method, req.Header.Get("Content-Type"))
	brevo_api_key := os.Getenv("BREVO_API_KEY")
	if brevo_api_key == "" {
		log.Println("BREVO_API_KEY is not set")
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	
	receiver_email := os.Getenv("RECEIVER_EMAIL")
	if receiver_email == "" {
		log.Println("email receiver is not set")
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	var data RequestData
	// decode JSON from request body
	err := json.NewDecoder(req.Body).Decode(&data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// clean data
	email := strings.TrimSpace(data.Email)
	email = strings.ToLower(email)
	subject := strings.TrimSpace(data.Subject)
	content := strings.TrimSpace(data.Content)
	name := strings.TrimSpace(data.Name)

	// check data 
	if email == "" {
		http.Error(w, "email is not valid", http.StatusBadRequest)
		return
	}
	if subject == "" {
		http.Error(w, "subject is not valid", http.StatusBadRequest)
		return 
	}
	if content == "" {
		http.Error(w, "content is not valid", http.StatusBadRequest)
		return 
	}
	if name == "" {
		http.Error(w, "name is not valid", http.StatusBadRequest)
		return
	}

	fullContent := fmt.Sprintf("<html><head></head><body><p>%s</p></body></html>", content)
	url := "https://api.brevo.com/v3/smtp/email"
	
	mail := BrevoMailer{
		HtmlContent: fullContent,
		Subject: subject,
		Sender: Sender{
			Email: "portefolio@clementguillemot.fr",
			Name: name,
		},
		To: []To{
			{
				Email: receiver_email,
				Name: "Clément Guillemot",
			},
		},
	}

	body, err := json.Marshal(mail)
	if err != nil {
		log.Println("failed to marshall Json")
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	reqBrevo, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	reqBrevo.Header.Add("api-key", brevo_api_key)
	reqBrevo.Header.Add("Content-Type", "application/json")

	res, err := http.DefaultClient.Do(reqBrevo)
	if err != nil {
		log.Println("failed to defer request to Brevo")
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	defer res.Body.Close()

	resBody, _ := io.ReadAll(res.Body)

	log.Printf("Brevo response status: %d", res.StatusCode)
  log.Printf("Brevo response body: %s", string(resBody))

	w.Header().Set("Content-Type", "application/json")

	success := res.StatusCode >= 200 && res.StatusCode < 300
  if success {
    json.NewEncoder(w).Encode(Response{
      Success: true,
      Message: "email sent",
    })
  } else {
    json.NewEncoder(w).Encode(Response{
      Success: false,
      Message: "failed to send message",
    })
  }
}

type Response struct {
	Success bool `json:"success"`
	Message string `json:"message"`
}

func corsMiddleware(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    w.Header().Set("Access-Control-Max-Age", "3600")

    // Répond immédiatement aux requêtes preflight
    if req.Method == "OPTIONS" {
      w.WriteHeader(http.StatusOK)
      return
    }

    next.ServeHTTP(w, req)
  })
}

// func optionsHandler(w http.ResponseWriter, req *http.Request) {
//   // Les headers sont déjà définis par le middleware
//   w.WriteHeader(http.StatusOK)
// }