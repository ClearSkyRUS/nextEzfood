import { observer } from "mobx-react";
import {
  Button,
  Container,
  Header,
  Segment,
  Grid,
  Image,
  Divider,
  List
} from "semantic-ui-react";

const MainContent = observer(({ rootStore }) => {
  return (
    <>
      <Segment style={{ padding: "8em 0em" }} vertical />
    </>
  );
});

export default MainContent;
