import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, ListItem, Button, Text, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../styles";

// TODO

// criar um modal para a criação de uma lista [ok]
// --- receber nome da lista
// --- pegar a data atual
// --- passar o valor 0 pra lista

// adicionar um evento no boto '+' [ok]

// Adicionar a nova lista ao state 'list' [ok]

// Criar a pagina GroceryList (a lista de compras em si)

// Adicionar itens na lista de compras

// Somar o total da lista de compras
// Criar função para formatar a data


const ListOfLists = ({ navigation }) => {

  const ListsStatico = [
    {
      id: 123,
      title: "Lista Supimpa",
      date: "02/04/2021",
      price: 422.85,
    },
    {
      id: 456,
      title: "Lista Maneira",
      date: "08/03/2021",
      price: 182.97,
    },
  ];
  

  const [ID, setID] = useState();

  const [nameList, setNameList] = useState();

  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [activedList, setActivedList] = useState(0);

  const [lists, setLists] = useState(ListsStatico);

  const toggleOverlayCreate = () => {
    setVisibleCreate(!visibleCreate);
  };

  const toggleOverlayUpdate = () => {
    setVisibleMenu(!visibleMenu);
    setVisibleUpdate(!visibleUpdate);

    lists.forEach((list) => {
      if (list.id == activedList) setNameList(list.title);
    });
  };

  const toggleOverlayMenu = (id) => {
    setActivedList(id);
    setVisibleMenu(!visibleMenu);
  };
  
  const handlerCreate = () => {
    const newList = {
      id: ID,
      title: nameList,
      date: Date.now(),
      price: 0,
    };

    setID(ID + 1);

    setLists([...lists, newList]);
    toggleOverlayCreate(!visibleCreate);
  };

  const handlerUpdate = () => {
    setVisibleUpdate(!visibleUpdate);

    lists.forEach((list) => {
      if (list.id === activedList) {
        list.title = nameList;
      }
    });

    setLists(lists);
  };

  const handlerDelete = () => {
    setVisibleMenu(!visibleMenu);

    const updateLists = lists.filter((list) => list.id != activedList);

    setLists(updateLists);
  };

  return (
    <View style={styles.containerInternal}>
      {lists.map((list, index) => (
        <ListItem
          key={index}
          onPress={() => navigation.navigate("GroceryList", { id: list.id })}
          onLongPress={() => toggleOverlayMenu(list.id)}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>{list.title}</ListItem.Title>
            <ListItem.Subtitle>{list.date}</ListItem.Subtitle>
          </ListItem.Content>
          <Text>R$ {list.price}</Text>
          <ListItem.Chevron />
        </ListItem>
      ))}

      <Overlay isVisible={visibleMenu} onBackdropPress={toggleOverlayMenu}>
        <ListItem onPress={toggleOverlayUpdate} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
              <Icon name="edit" size={20} color="black" />
              Editar
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem onPress={handlerDelete}>
          <ListItem.Content>
            <ListItem.Title>
              <Icon name="trash" size={20} color="black" />
              Excluir
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Overlay>

      <Overlay isVisible={visibleCreate} onBackdropPress={toggleOverlayCreate}>
        <Input
          label="Nome"
          placeholder="Nome"
          onChangeText={(text) => setNameList(text)}
        />
        <Button title="Criar" onPress={handlerCreate} />
      </Overlay>

      <Overlay
        isVisible={visibleUpdate}
        onBackdropPress={toggleOverlayUpdate}
        overlayStyle={styles.Overlay}
      >
        <Input
          label="Nome da lista"
          placeholder="Nome da Lista"
          value={nameList}
          onChangeText={(text) => setNameList(text)}
        />
        <Button
          title="Atualizar"
          containerStyle={styles.button}
          onPress={handlerUpdate}
        />
      </Overlay>

      <TouchableOpacity
        style={styles.buttonFloat}
        onPress={toggleOverlayCreate}
      >
        <Icon name="plus" size={22} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
};

export default ListOfLists;
