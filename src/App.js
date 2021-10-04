import React, { Component } from "react";
import Header from "./components/header/Header";
import theme from "./Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { Container } from "./styles/common/Container.styled";
import Banner from "./components/banner/Banner";
import News from "./components/news/News";
import Courses from "./components/courses/Courses";
import Teachers from "./components/teachers/Teachers";
import Lessons from "./components/lessons/Lessons";
import Videos from "./components/lessons/Videos";
import StudentResults from "./components/student-results/StudentResults";
import Comments from "./components/comments/Comments";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Banner />
        <Container>
          <News />
          <Courses />
          <Teachers />
          <Lessons />
          <Videos />
          <StudentResults />
          <Comments />
          <ContactUs />
        </Container>
          <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
