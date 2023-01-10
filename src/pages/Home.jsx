import React, { useEffect } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ButtonsEditDelete from '../components/ButtonsEditDelete';
import NavBar from '../components/NavBar';
import NewToDo from '../components/NewToDo';
import ToDoCard from '../components/ToDoCard';
import { getTodosThunk } from '../store/slices/todos.slice';
import { getLoggedUserThunk } from '../store/slices/user.slice';

const Home = () => {

    const dispatch = useDispatch();
    const { todos } = useSelector(state => state);

    useEffect(() => {
        dispatch(getTodosThunk());
        dispatch(getLoggedUserThunk());
    }, [])
    return (
        <div>
            <h1>To Do's</h1>
            <NewToDo />
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {todos.map(todo => (
                    <ToDoCard todo={todo} key={todo.id} />
                ))}
            </Row>
        </div>
    );
};

export default Home;