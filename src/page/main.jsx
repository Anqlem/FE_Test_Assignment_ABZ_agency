import { useEffect, useState } from "react";
import axios from "axios";

import { Card, Header, Form, Button, SuccessForm } from "../components/index";
import { useDispatch } from "react-redux";
import {
  fetchAllUsers,
  fetchNextUsers,
  fetchPositions,
  fetchToken,
} from "../redux/slices/users";

function Main() {
  const dispatch = useDispatch();

  const [postSuccess, setPostSuccess] = useState(Boolean);
  const [isNextPage, setIsNextPage] = useState(true);

  const [name, setName] = useState({ isValid: false });
  const [email, setEmail] = useState({ isValid: false });
  const [phone, setPhone] = useState({ isValid: false });
  const [position, setPosition] = useState({ isValid: false });
  const [photo, setPhoto] = useState({ isValid: false });

  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [fetchedPositions, setFetchedPositions] = useState([]);

  const fetchUsers = () => {
    dispatch(fetchAllUsers()).then((res) => {
      setNextPage(res.payload.links);
      setFetchedUsers(res.payload.users);
    });
  };

  useEffect(() => {
    fetchUsers();
    dispatch(fetchPositions()).then((res) => {
      setFetchedPositions(res.payload.positions);
    });
  }, []);

  const onShowMore = (nextPage) => {
    dispatch(fetchNextUsers(nextPage)).then((res) => {
      if (res.payload.links.next_url === null) {
        const resUsers = Object.values(res.payload.users);
        setIsNextPage(false);
        setFetchedUsers([...fetchedUsers, ...resUsers]);
      } else {
        const resUsers = Object.values(res.payload.users);
        setNextPage(res.payload.links);
        setFetchedUsers([...fetchedUsers, ...resUsers]);
      }
    });
  };

  const handleSubmit = () => {
    if (
      (name.isValid &&
        email.isValid &&
        phone.isValid &&
        position.isValid &&
        photo.isValid) === false
    ) {
      alert("Fill all required inputs!");
    } else {
      dispatch(fetchToken()).then((res) => {
        var formData = new FormData();
        formData.append("position_id", position.position);
        formData.append("name", name.name);
        formData.append("email", email.email);
        formData.append("phone", phone.phone);
        formData.append("photo", photo.photo_image);
        axios
          .post(
            "https://frontend-test-assignment-api.abz.agency/api/v1/users",
            formData,
            {
              body: formData,
              headers: {
                Token: res.payload.token,
              },
            }
          )
          .then(() => {
            setPostSuccess(true);
            setIsNextPage(true);
            fetchUsers();
          })
          .catch((err) => {
            alert(`${err.response.data.message}`);
          });
      });
    }
  };

  const handleName = (e) => {
    setName({
      name: e.target.value,
      isValid: e.target.checkValidity(),
    });
  };
  const handleEmail = (e) => {
    setEmail({
      email: e.target.value,
      isValid: e.target.checkValidity(),
    });
  };
  const handlePhone = (e) => {
    setPhone({
      phone: e.target.value,
      isValid: e.target.checkValidity(),
    });
  };

  const handlePosition = (e) => {
    setPosition({
      position: e.target.id,
      isValid: e.target.checkValidity(),
    });
  };

  const handlePhoto = (e) => {
    setPhoto({
      photo_image: e.target.files[0],
      isValid: e.target.checkValidity(),
    });
  };

  return (
    <div>
      <body>
        <Header />
        <div className="main">
          <div className="bg-cover">
            <div className="bg-text">
              <h1>Test assignment for front-end developer</h1>
              <p>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with
                accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving.
              </p>
            </div>
            <Button label="Sign Up" />
          </div>
        </div>
        <div className="get-form">
          <h1>Working with a GET request</h1>
          <div className="cards">
            {fetchedUsers.map((c) => (
              <Card
                name={c.name}
                position={c.position}
                email={c.email}
                phone={c.phone}
                src={c.photo}
              />
            ))}
          </div>
          {isNextPage === false ? (
            <></>
          ) : (
            <Button label="Show More" onClick={() => onShowMore(nextPage)} />
          )}
        </div>
        <div className="container">
          {postSuccess === true ? (
            <SuccessForm />
          ) : (
            <Form
              pos={fetchedPositions}
              handlers={{
                handleEmail,
                handleName,
                handlePhone,
                handlePhoto,
                handleSubmit,
                handlePosition,
              }}
              data={{ name, email, phone, photo, position }}
            />
          )}
        </div>
      </body>
    </div>
  );
}

export default Main;
