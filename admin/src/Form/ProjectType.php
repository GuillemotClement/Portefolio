<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\ProjectTechno;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
//            ->add('description', TextareaType::class, [
//                'attr' => ['class' => 'textarea'],
//                'label' => "Description du projet"
//            ])
//            ->add('reason')
//            ->add('github')
//            ->add('image')
//            ->add('link')
//            ->add('techno_id', EntityType::class, [
//                'attr' => ['class' => 'border'],
//                'class' => ProjectTechno::class,
//                'choice_label' => 'title',
//                'multiple' => true
//            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
