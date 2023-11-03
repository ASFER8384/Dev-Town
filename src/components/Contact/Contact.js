import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 50vh;
  background-color: black;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.8rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Love = styled.p`
  color: white;
  font-size: 1.7rem;
  margin-top: 3rem;
`;

function Contact() {
  return (
    <>
      <Footer>
        <FooterLinks>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Store locator</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">News</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterLinks>
        <Love>
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href=""
          >
            &nbsp; Asfer
          </a>
        </Love>
      </Footer>
    </>
  );
}

export default Contact;
