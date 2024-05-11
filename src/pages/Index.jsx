import { Container, VStack, Input, Button, Text, Box, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const addNote = () => {
    if (input.trim() === "") {
      toast({
        title: "Cannot add empty note.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput("");
    toast({
      title: "Note added.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
    toast({
      title: "Note deleted.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding="4">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb="4">Note Taking App</Text>
        <Input
          placeholder="Type your note here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="md"
        />
        <Button onClick={addNote} colorScheme="blue">Add Note</Button>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} width="100%" p="4" borderWidth="1px" borderRadius="lg">
              <Text>{note}</Text>
              <Button size="sm" colorScheme="red" onClick={() => deleteNote(index)}>Delete</Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;