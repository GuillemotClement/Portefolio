<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $reason = null;

    #[ORM\Column(length: 255)]
    private ?string $github = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $link = null;

    /**
     * @var Collection<int, ProjectStatus>
     */
    #[ORM\OneToMany(targetEntity: ProjectStatus::class, mappedBy: 'project')]
    private Collection $description_id;

    #[ORM\ManyToOne(inversedBy: 'projects')]
    private ?ProjectTechno $techno_id = null;

    /**
     * @var Collection<int, ProjectFeature>
     */
    #[ORM\OneToMany(targetEntity: ProjectFeature::class, mappedBy: 'project')]
    private Collection $feature_id;

    public function __construct()
    {
        $this->description_id = new ArrayCollection();
        $this->feature_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getReason(): ?string
    {
        return $this->reason;
    }

    public function setReason(string $reason): static
    {
        $this->reason = $reason;

        return $this;
    }

    public function getGithub(): ?string
    {
        return $this->github;
    }

    public function setGithub(string $github): static
    {
        $this->github = $github;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): static
    {
        $this->link = $link;

        return $this;
    }

    /**
     * @return Collection<int, ProjectStatus>
     */
    public function getDescriptionId(): Collection
    {
        return $this->description_id;
    }

    public function addDescriptionId(ProjectStatus $descriptionId): static
    {
        if (!$this->description_id->contains($descriptionId)) {
            $this->description_id->add($descriptionId);
            $descriptionId->setProject($this);
        }

        return $this;
    }

    public function removeDescriptionId(ProjectStatus $descriptionId): static
    {
        if ($this->description_id->removeElement($descriptionId)) {
            // set the owning side to null (unless already changed)
            if ($descriptionId->getProject() === $this) {
                $descriptionId->setProject(null);
            }
        }

        return $this;
    }

    public function getTechnoId(): ?ProjectTechno
    {
        return $this->techno_id;
    }

    public function setTechnoId(?ProjectTechno $techno_id): static
    {
        $this->techno_id = $techno_id;

        return $this;
    }

    /**
     * @return Collection<int, ProjectFeature>
     */
    public function getFeatureId(): Collection
    {
        return $this->feature_id;
    }

    public function addFeatureId(ProjectFeature $featureId): static
    {
        if (!$this->feature_id->contains($featureId)) {
            $this->feature_id->add($featureId);
            $featureId->setProject($this);
        }

        return $this;
    }

    public function removeFeatureId(ProjectFeature $featureId): static
    {
        if ($this->feature_id->removeElement($featureId)) {
            // set the owning side to null (unless already changed)
            if ($featureId->getProject() === $this) {
                $featureId->setProject(null);
            }
        }

        return $this;
    }
}
