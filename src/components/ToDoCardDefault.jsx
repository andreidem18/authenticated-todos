import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkToDoThunk } from '../store/slices/todos.slice';
import ButtonsEditDelete from './ButtonsEditDelete';

const ToDoCardDefault = ({ todo, edit }) => {

    const dispatch = useDispatch();
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {todo.task}
                    </Card.Text>
                    <Form.Check
                        type='checkbox'
                        label='Is completed'
                        id={`${todo.id}-is-completed`}
                        checked={todo.isCompleted}
                        onChange={() => dispatch(checkToDoThunk(todo))}
                    />
                    <ButtonsEditDelete onUpdate={edit}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ToDoCardDefault;