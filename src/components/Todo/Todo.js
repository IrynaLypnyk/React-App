import React, { Component } from 'react';
//import styled from 'styled-components';

import './Todo.css';
const TodoHeader = ({toDo, done}) => {
    return (
        <div className="todo-header">
            <h1>Todo List</h1>

        </div>
    );
};
const TodoList = ({ items, onDelete }) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="todo-list-item">
                <TodoListItem
                    { ...itemProps }
                    onDelete={ () => onDelete(id) } />
            </li>
        );
    });

    return (<ul className="todo-list">{ elements }</ul>);
};
const TodoListItem = ({ done,
                          label, onDelete }) => {

    let classNames = 'todo-list-item-text';

    if (done) {
        classNames += ' done';
    }


    return (
        <span className={classNames}>
      <span
          className="todo-list-item-label"
      >{label}</span>

      <button type="button"
              className="delete-btn"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
    );
};

class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onItemAdded || (() => {});
        cb(label);
    };

    render() {
        return (
            <form
                className="item-add-form"
                onSubmit={this.onSubmit}>

                <input type="text"
                       className="item-add-form__new-input"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="Что еще сделать?" />

                <button type="submit"
                        className="item-add-form__btn">Добавить</button>
            </form>
        );
    }
}
class Todo extends Component{
   maxId = 100;

    state = {
        items: [
            { id: 1, label: 'Сделать тестовое задание для Helsi'},
            { id: 2, label: 'Выучить хорошо React'},
            { id: 3, label: 'Повторить JS',}
        ],

    };

    onItemAdded = (label) => {
        this.setState((state) => {
            const item = this.createItem(label);
            return { items: [...state.items, item] };
        })
    };


    onDelete = (id) => {
        this.setState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx + 1)
            ];
            return { items };
        });
    };


    createItem(label) {
        return {
            id: ++this.maxId,
            label
        };
    }

    render() {
        const {items} = this.state;

        return (
            <div className="todo">
                <TodoHeader />
                <TodoList
                    items={ items }
                    onDelete={this.onDelete} />
                <ItemAddForm
                    onItemAdded={this.onItemAdded} />
            </div>
        );
    };
}

export default Todo;