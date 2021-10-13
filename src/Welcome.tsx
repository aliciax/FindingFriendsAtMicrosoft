import { Button, Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useAppContext } from "./AppContext";
import React from "react";
import chilling from "./assets/chilling.png";
import coffee from "./assets/coffee.gif";

export default function Welcome(props: RouteComponentProps) {
  const app = useAppContext();

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <Container fluid>
        <h1>React Graph Tutorial</h1>
        <p className="lead">
          This sample app shows how to use the Microsoft Graph API to access a
          user's data from React
        </p>
        <AuthenticatedTemplate>
          <div>
            <h4>Welcome {app.user?.displayName || ""}!</h4>
            <p>Use the navigation bar at the top of the page to get started.</p>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          {/* <img src={coffee} /> */}

          <Button color="primary" onClick={app.signIn!}>
            Click here to sign in
          </Button>
          {/* <img src={chilling} /> */}
        </UnauthenticatedTemplate>
      </Container>
    </div>
  );
}
