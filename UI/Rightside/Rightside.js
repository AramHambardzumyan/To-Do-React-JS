import React from 'react';
import Card from '../Card/Card';
import Wrapper from '../Wrapper/Wrapper';
// import  classes from "../Global.module.css"
import Textitem from '../../components/Textitem/Textitem';
import Box from '../Box/Box';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import edit from '../../assets/image/edit.png';
import save from '../../assets/image/save.png';
import Image from '../../components/Image/Image';
import './Rightside.css';

const Rightside = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem('do')) || []
  );
  const [toDoCount, setToDoCount] = useState(0);
  let [toDoValue, setToDoValue] = useState('');
  let [editText, setEditText] = useState('');

  let hour = new Date();
  const changeDate = hour.toLocaleString();

  const handleClick = (id, completed) => {
    setToDoList((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !completed;
        }
        return todo;
      })
    );
  };

  const deleteToDo = (id) => {
    let toDoWithoutDeleted = toDoList.filter((el) => el.id !== id);
    setToDoList(toDoWithoutDeleted);
  };

  const addToDO = () => {
    if (toDoValue !== '') {
      const newToDo = {
        do: toDoValue,
        id: toDoCount,
        completed: false,
        edit: false,
        time: changeDate,
      };
      setToDoList(toDoList.concat(newToDo));

      setToDoCount(toDoCount + 1);
      setToDoValue('');
    }
  };

  const toDoText = (event) => {
    setToDoValue(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('do', JSON.stringify(toDoList));
  }, [toDoList]);

  let toDoEdit = (id, edit) => {
    setToDoList((prevState) =>
      prevState.map((el) => {
        console.log(toDoList);
        if (el.id !== id && el.edit === true) {
          el.edit = false;
        }
        if (el.id === id) {
          if (el.edit === false) {
            setEditText(el.do);
            el.edit = !edit;
          } else {
            if (editText !== '') {
              el.do = editText;
              el.edit = !edit;
            }
          }
        }
        return el;
      })
    );
  };

  let EditText = (event) => {
    setEditText(event.target.value);
    console.log(editText);
  };

  return (
    <Wrapper>
      <Card className="right-side-container">
        <Box className="right-side-to-do-list-text-box">
          <Textitem className="right-side-to-do-list-text">ToDo List</Textitem>
        </Box>
        <Card className="right-side-input-add-container">
          <Input
            onChange={(event) => toDoText(event)}
            type="text"
            placeholder="New Task"
            className="right-side-new-task-input"
            value={toDoValue}
          />
          <Button onClick={addToDO} className="right-side-add-button">
            Add
          </Button>
        </Card>

        {toDoList
          .slice(0)
          .reverse()
          .map((el) => {
            return (
              <Card key={el.id} className="right-side-to-do-container">
                <Box className="right-side-add-time">{el.time}</Box>
                <Box className="right-side-to-do-list-box">
                  <Textitem
                    className={
                      el.edit ? 'edit-display' : 'right-side-text-item'
                    }
                  >
                    {el.do || editText}
                  </Textitem>
                  <Input
                    onChange={(event) => EditText(event, el.id)}
                    className={
                      el.edit ? 'right-side-text-item' : 'edit-display'
                    }
                    value={editText}
                  ></Input>
                  <Button
                    className={
                      el.completed ? 'active-class' : 'right-side-to-do-done'
                    }
                    onClick={() => handleClick(el.id, el.completed)}
                  >
                    ✓
                  </Button>
                  <Box className="right-side-edit-box">
                    {' '}
                    <Image
                      onClick={() => toDoEdit(el.id, el.edit)}
                      src={
                        el.edit
                          ? 'data:image/png;base64,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'
                          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'
                      }
                      alt=""
                      className="edit-icon"
                    ></Image>
                  </Box>
                  <Button
                    onClick={() => deleteToDo(el.id)}
                    className="right-side-delete-to-do-button"
                  >
                    X
                  </Button>
                </Box>
              </Card>
            );
          })}
      </Card>
    </Wrapper>
  );
};
export default Rightside;
