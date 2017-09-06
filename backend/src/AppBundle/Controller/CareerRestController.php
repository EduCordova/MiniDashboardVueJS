<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Career;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;

class CareerRestController extends Controller
{
    /**
     * @Get("/careers")
     */
    public function getCareersAction()
    {
        $em = $this->getDoctrine()->getManager();
        $careers = $em->getRepository('AppBundle:Career')->findAll();

        $view = View::create()->setData(array('careers' => $careers));

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @Get("/career/{id}")
     */
    public function getCareerAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $career = $em->getRepository('AppBundle:Career')->findOneById($id);

        $view = View::create()->setData(array('career' => $career));

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @Get("/career/{careerId}/students")
     */
    public function getStudentsByCareerAction($careerId)
    {
        $em = $this->getDoctrine()->getManager();
        $students = $em->getRepository('AppBundle:Student')->findStudentsByCareer($careerId);

        $view = View::create()->setData(array('students' => $students));

        return $this->get('fos_rest.view_handler')->handle($view);
    }
}