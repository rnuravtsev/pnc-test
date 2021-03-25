import styled from "styled-components";
import MovieIcon from "@material-ui/icons/Movie";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${(p) => p.theme.palette.primary.main};
`;

const Header = () => {
  return (
    <StyledHeader>
        <Container>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <MovieIcon fontSize="large" />
            </Grid>
            <Grid item>test movie application</Grid>
          </Grid>
        </Container>
    </StyledHeader>
  );
};

export default Header;
