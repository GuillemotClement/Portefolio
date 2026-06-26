# Build stage
FROM golang:1.26-alpine AS builder

WORKDIR /app

COPY . .

RUN go mod download && \
    go mod verify && \
    CGO_ENABLED=0 GOOS=linux go build -o mailer .

# Runtime stage
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/mailer .

EXPOSE 8085

CMD ["./mailer"]