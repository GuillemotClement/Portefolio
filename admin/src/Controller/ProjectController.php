<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\ProjectFeature;
use App\Entity\ProjectTechno;
use App\Form\FeatureType;
use App\Form\ProjectTechnoType;
use App\Form\ProjectType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProjectController extends AbstractController
{
    #[Route('/project', name: 'app_project')]
    public function index(EntityManagerInterface $em): Response
    {
        $projects = $em->getRepository(Project::class)->findAll();

        return $this->render('project/index.html.twig', [
            'projects' => $projects,
        ]);
    }

    #[Route('/new-project', name:'app_new_project')]
    public function createProject(Request $request, EntityManagerInterface $em): Response
    {
        $project = new Project();

        $form = $this->createForm(ProjectType::class, $project);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid() ){
            $project = $form->getData();
            $em->persist($project);
            $em->flush();
            return $this->redirectToRoute('app_project');
        }

        return $this->render('project/new.html.twig', [
            'form' => $form
        ]);
    }

    // PROJECT TECHNO =========================================
    #[Route('/project-techno', name:'app_project_techno')]
    public function listProjectTechno(EntityManagerInterface $em): Response
    {
        $projectTechno = $em->getRepository(ProjectTechno::class)->findAll();

        return $this->render('project/techno/index.html.twig', [
            'technos' => $projectTechno
        ]);
    }

    #[Route('/new-techno', name:'app_new_techno')]
    public function createTechnoProject(Request $request, EntityManagerInterface $em): Response
    {
        $techno = new ProjectTechno();

        $form = $this->createForm(ProjectTechnoType::class, $techno);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $techno = $form->getData();
            $em->persist($techno);
            $em->flush();
            return $this->redirectToRoute('app_project_techno');
        }

        return $this->render('project/techno/new.html.twig', [
            'form' => $form
        ]);
    }

    // PROJECT FEATURE ==========================================================

    #[Route('/feature', name:'app_feature')]
    public function listFeature(EntityManagerInterface $em): Response
    {
        $features = $em->getRepository(ProjectFeature::class)->findAll();

        return $this->render('project/feature/index.html.twig', [
            'features' => $features
        ]);
    }

    #[Route('/new-feature', name:'app_new_feature')]
    public function createFeature(Request $request, EntityManagerInterface $em): Response
    {
        $feature = new ProjectFeature();

        $form = $this->createForm(FeatureType::class, $feature);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $feature = $form->getData();
            $em->persist($feature);
            $em->flush();
            return $this->redirectToRoute('app_feature');
        }

        return $this->render('project/feature/new.html.twig', [
            'form' => $form
        ]);
    }





}
