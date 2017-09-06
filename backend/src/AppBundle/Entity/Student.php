<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Student
 *
 * @ORM\Table(name="students")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\StudentRepository")
 */
class Student
{
    /**
     * @var int
     *
     * @ORM\Column(name="student_id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=36)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="first_lastname", type="string", length=45)
     */
    private $firstLastName;

    /**
     * @var string
     *
     * @ORM\Column(name="second_lastname", type="string", length=45)
     */
    private $secondLastName;

    /** @ORM\ManyToOne(targetEntity="AppBundle\Entity\Career")
     *  @ORM\JoinColumn(name="career", referencedColumnName="career_id") 
     */ 
    private $career;

    /**
     * @var int
     *
     * @ORM\Column(name="age", type="integer")
     */
    private $age;

    /**
     * @var int
     *
     * @ORM\Column(name="semester", type="integer")
     */
    private $semester;

    /**
     * @var string
     *
     * @ORM\Column(name="state", type="string", length=45)
     */
    private $state;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=45)
     */
    private $city;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Student
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set firstLastName
     *
     * @param string $firstLastName
     *
     * @return Student
     */
    public function setFirstLastName($firstLastName)
    {
        $this->firstLastName = $firstLastName;

        return $this;
    }

    /**
     * Get firstLastName
     *
     * @return string
     */
    public function getFirstLastName()
    {
        return $this->firstLastName;
    }

    /**
     * Set secondLastName
     *
     * @param string $secondLastName
     *
     * @return Student
     */
    public function setSecondLastName($secondLastName)
    {
        $this->secondLastName = $secondLastName;

        return $this;
    }

    /**
     * Get secondLastName
     *
     * @return string
     */
    public function getSecondLastName()
    {
        return $this->secondLastName;
    }

    /**
     * Set age
     *
     * @param integer $age
     *
     * @return Student
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get age
     *
     * @return integer
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set semester
     *
     * @param integer $semester
     *
     * @return Student
     */
    public function setSemester($semester)
    {
        $this->semester = $semester;

        return $this;
    }

    /**
     * Get semester
     *
     * @return integer
     */
    public function getSemester()
    {
        return $this->semester;
    }

    /**
     * Set state
     *
     * @param string $state
     *
     * @return Student
     */
    public function setState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get state
     *
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Set city
     *
     * @param string $city
     *
     * @return Student
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set career
     *
     * @param \AppBundle\Entity\Career $career
     *
     * @return Student
     */
    public function setCareer(\AppBundle\Entity\Career $career = null)
    {
        $this->career = $career;

        return $this;
    }

    /**
     * Get career
     *
     * @return \AppBundle\Entity\Career
     */
    public function getCareer()
    {
        return $this->career;
    }
}
