import * as React from 'react'
import Form from 'react-bootstrap/Form'
import {Button, Col, FormLabel} from  'react-bootstrap'

const NeedHelp = () => {
    return (
        <div className="needHelp">
        <div className="container">
            <h3 className="needHelp-title">Заполните форму максимально подробно и перепроверьте перед отправкой.ПРОСЬБА: Отправлять форму однажды </h3>
        <Form>
  <Form.Group>
    <Form.Label>Ваше имя/название организации</Form.Label>
    <Form.Control className="needHelp-input" placeholder="Имя" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Ваш номер телефона</Form.Label>
    <FormLabel>Заполняйте номера в формате: 8---------- или 9998------- и так далее, ТО ЕСТЬ БЕЗ +, ПРОБЕЛОВ и -. И НИКАКИХ БУКВ, ТОЛЬКО ЦИФРЫ</FormLabel>
    <Form.Control className="needHelp-input" placeholder="87770011223" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Ваш город</Form.Label>
    <Form.Control className="needHelp-input" placeholder="Астана" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Какая помощь вам необходима?</Form.Label>
    <Form.Label>Какие лекарства, в каком виде необходима помощь - напишите пожалуйста максимально подробно</Form.Label>
    <Form.Control  as="textarea"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Отправить
  </Button>
</Form>
        </div>
        </div>
    )
}

export { NeedHelp }
