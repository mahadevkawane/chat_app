import React, { useState, useEffect } from "react";
import { ScrollView, Button, Text } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import firebase from "../database/firebase.js";
// /import amount from "./UserDetail.js"
import { useNavigation } from "@react-navigation/native";
const UsersList = (props) => {
  
  const [users, setUsers] = useState([]);
  const navigation = useNavigation()
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({ id: doc.id, name, email, phone });
      });
      setUsers(users);
    });
  }, []);
  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };
  return (
    <ScrollView>
      <Text>

      </Text>
      <Text></Text>
      <Button color="#7DFFF9"  title="About user" onPress={() => navigation.navigate("Abount")}/>
      
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetailScreen", { userId: user.id })
              //props.navigation.navigate("Ootp", { userId: user.id })
            }
          >
            <ListItem.Chevron />
            <Avatar
              size={170}
              rounded
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/011/098/093/original/medicine-capsule-pill-drug-with-bottle-3d-icon-illustration-png.png",
              }}
            />
            
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              
            </ListItem.Content>
            
          </ListItem>
          
        );
      })}
      
      <Text> {getUserById.doc}</Text>
   
      
    </ScrollView>
  );
};

export default UsersList;