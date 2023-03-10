import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchToken = createAsyncThunk(
  "token/fetchToken",
  async (params) => {
    const { data } = await axios.get("/token", params);
    return data;
  }
);

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (params) => {
    const { data } = await axios.get("/users?count=6", params);
    return data;
  }
);

export const fetchNextUsers = createAsyncThunk(
  "users/fetchNextUsers",
  async (params) => {
    const { data } = await axios.get(`${params.next_url}`, params);
    return data;
  }
);

export const fetchPositions = createAsyncThunk(
  "positions/fetchPositions",
  async (params) => {
    const { data } = await axios.get("/positions", params);
    return data;
  }
);

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersData",
  initialState,
  extraReducers: {
    [fetchAllUsers.pending]: (state) => {
      state.status = "Loading";
      state.users = [];
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.status = "Loaded";
      state.users = action.payload;
    },
    [fetchAllUsers.error]: (state) => {
      state.status = "Error";
      state.users = [];
    },
    [fetchNextUsers.pending]: (state) => {
      state.status = "Loading";
      state.users = [];
    },
    [fetchNextUsers.fulfilled]: (state, action) => {
      state.status = "Loaded";
      state.users = action.payload;
    },
    [fetchNextUsers.error]: (state) => {
      state.status = "Error";
      state.users = [];
    },
    [fetchPositions.pending]: (state) => {
      state.status = "Loading";
      state.positions = [];
    },
    [fetchPositions.fulfilled]: (state, action) => {
      state.status = "Loaded";
      state.positions = action.payload;
    },
    [fetchPositions.error]: (state) => {
      state.status = "Error";
      state.positions = [];
    },
    [fetchToken.pending]: (state) => {
      state.status = "Loading";
      state.token = [];
    },
    [fetchToken.fulfilled]: (state, action) => {
      state.status = "Loaded";
      state.token = action.payload;
    },
    [fetchToken.error]: (state) => {
      state.status = "Error";
      state.token = [];
    },
  },
});

export const usersReducer = usersSlice.reducer;
