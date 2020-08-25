import { NextPage } from "next";

import { Container, Typography } from "@material-ui/core";

import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

export default function index() {
  return (
    <Layout>
      <Typography variant="h6" color="initial">
        <Container>
          <RecipeCard />
        </Container>
      </Typography>
    </Layout>
  );
}
