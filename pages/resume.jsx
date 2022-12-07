import { Flex, Box, Button } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import Container from "../components/Container";
import Header from "../components/Header";
import LeftArticle from "../components/LeftArticle";
import RightArticle from "../components/RightArticle";

const ResumePage = () => {
  const downloadPdfDocument = () => {
    const input = document.getElementById("print");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 300);
      pdf.save(`Resume.pdf`);
    });
  };
  return (
    <Container maxW="50em" showNav={false} h="auto">
      <Flex
        flexDirection="column"
        align="center"
        p="1em"
        width="210mm"
        minHeight="297mm"
        id="print"
      >
        <Header />
        <Box p="1em"></Box>
        <Flex flexDirection="row" gap="2.5em">
          <LeftArticle />
          <RightArticle />
        </Flex>
      </Flex>
      <Button bg="green" color="white" p="1em" onClick={downloadPdfDocument}>
        Download
      </Button>
    </Container>
  );
};

export default ResumePage;
