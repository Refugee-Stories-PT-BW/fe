import React from "react";
import { Link } from "react-router-dom";

import { Image, Menu, Dropdown, Button, Container } from "semantic-ui-react";

export default function navBar() {
  return (
    <Container style={{ width: "100%" }}>
      <Menu stackable size="huge" style={{ margin: "0" }}>
        <Menu.Item>
          <img
            src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png"
            alt="Logo"
          />
        </Menu.Item>
        {/* Will need to be linked to the correct component */}
        <Link to="/yourstory" style={{ display: "flex" }}>
          <Menu.Item name="features">Stories</Menu.Item>
        </Link>

        <Menu.Item name="testimonials">Families</Menu.Item>

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Arabic</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Link to="/log_in">
              {/* Will need to be linked to the correct component */}
              <Button primary>Sign In</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Image src='https://i.ibb.co/c8T58vV/Nav-Menu-Photo.jpg' alt='Beach Full of empty boats' fluid/>
    </Container>
  );
}
