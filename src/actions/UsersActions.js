import {
  CREATE_USER,
  RETRIEVE_USERS,
  RETRIEVE_USERS_BYID,
  UPDATE_USER,
  DELETE_USER,
  DELETE_ALL_USERS,
} from "./Variables";

import Mymethods from "../Mymethods";

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await Mymethods.create(data);

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await Mymethods.getAll();

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const retrieveUsersByid = (id) => async (dispatch) => {
  try {
    const res = await Mymethods.get(id);

    // dispatch({
    //   type: RETRIEVE_USERS_BYID,
    //   payload: res.data,
    // });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await Mymethods.update(id, data);

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await Mymethods.remove(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllUsers = () => async (dispatch) => {
  try {
    const res = await Mymethods.removeAll();

    dispatch({
      type: DELETE_ALL_USERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findUsersByName = (Name) => async (dispatch) => {
  try {
    const res = await Mymethods.findByName(Name);

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};
