import { Box, Container, Flex, Heading, Text, Button, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4} bg="blue.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Tutor Titans
          </Heading>
        </Flex>

        <HStack spacing={8} alignItems="center">
          <Link href="#" p={2}>
            Home
          </Link>
          <Link href="#" p={2}>
            About Us
          </Link>
          <Link href="#" p={2}>
            Services
          </Link>
          <Link href="#" p={2}>
            Contact
          </Link>
        </HStack>

        <HStack spacing={4}>
          <Button leftIcon={<FaPhoneAlt />} variant="solid" size="sm">
            Call Us
          </Button>
          <Button leftIcon={<FaEnvelope />} variant="solid" size="sm">
            Email Us
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex align="center" justify="center" bg="blue.200" height="60vh">
        <VStack spacing={4}>
          <Heading as="h2" size="2xl" textAlign="center">
            Empower Your Learning with Tutor Titans
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Join thousands of students excelling in their studies.
          </Text>
          <Button size="lg" colorScheme="blue">
            Find a Tutor
          </Button>
        </VStack>
      </Flex>

      {/* Features Section */}
      <Box p={8}>
        <VStack spacing={8}>
          <Heading as="h3" size="lg">
            Why Choose Us?
          </Heading>
          <HStack
            spacing={10}
            divider={
              <Text fontSize="xl" px={4}>
                |
              </Text>
            }
          >
            <Box textAlign="center">
              <Heading as="h4" size="md">
                Professional Tutors
              </Heading>
              <Text>Experienced and certified professionals</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h4" size="md">
                Customized Learning
              </Heading>
              <Text>Personalized tutoring tailored to student needs</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h4" size="md">
                Flexible Scheduling
              </Heading>
              <Text>Learn at your own pace and convenience</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* Footer */}
      <Box bg="blue.500" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} Tutor Titans. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
