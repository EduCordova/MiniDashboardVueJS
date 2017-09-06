<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Student;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;

class StudentRestController extends Controller
{
    /**
     * @Get("/students")
     */
    public function getStudentsAction()
    {
        $em = $this->getDoctrine()->getManager();
        $students = $em->getRepository('AppBundle:Student')->findAll();

        $view = View::create()->setData(array('students' => $students));

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @Get("/student/{id}")
     */
    public function getStudentAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $student = $em->getRepository('AppBundle:Student')->findOneById($id);

        $view = View::create()->setData(array('student' => $student));

        return $this->get('fos_rest.view_handler')->handle($view);
    }
}