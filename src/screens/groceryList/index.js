import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, ListItem, Button, Text, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../styles";

const ListItems = [
  {
    id: 123,
    items: [
      {
        id: 111,
        name: "Manteiga 500g",
        quantity: 1,
        price: 5.89,
      },
      {
        id: 222,
        name: "Farinha 1Kg",
        quantity: 3,
        price: 4.76,
      },
    ],
  },
  {
    id: 456,
    items: [
      {
        id: 333,
        name: "Escova de dentes 1un",
        quantity: 1,
        price: 3.98,
      },
      {
        id: 444,
        name: "Creme dental menta",
        quantity: 4,
        price: 2.78,
      },
      {
        id: 555,
        name: "Enxaguante bucal",
        quantity: 1,
        price: 9.68,
      },
    ],
  },
]

const GroceryList = ({ navigation, route }) => {
  const id = route.params.id;

  const [ID, setID] = useState(4);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);

  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [activedProduct, setActivedProduct] = useState(0);

  const [lists, setLists] = useState(ListItems);

  const clearState = () => {
    setProduct("");
    setQuantity(1);
    setPrice(0.0);
  };

  const findList = () => {
    let fetchedList;

    lists.forEach((list) => {
      if (list.id == id) fetchedList = list;
    });

    return fetchedList ? fetchedList : null;
  };

  const toggleOverlayCreate = () => {
    setVisibleCreate(!visibleCreate);
  };

  const toggleOverlayUpdate = () => {
    setVisibleMenu(!visibleMenu);
    setVisibleUpdate(!visibleUpdate);

    let fetchedList;
    lists.forEach((list) => {
      if (list.id == id) fetchedList = list;
    });
    fetchedList.items.forEach((item) => {
      if (item.id == activedProduct) {
        setProduct(item.name);
        setQuantity(item.quantity);
        setPrice(item.price);
      }
    });
  };
  
  const toggleOverlayMenu = (id) => {
    setActivedProduct(id);
    setVisibleMenu(!visibleMenu);
  };

  const handlerCreate = () => {
    const newProduct = {
      id: ID,
      name: product,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    let listExists = false;
    lists.forEach((list) => {
      if (list.id == id) {
        listExists = true;
        list.items.push(newProduct);
      }
    });

    if (!listExists) {
      lists.push({
        id: id,
        items: [newProduct],
      });
    }

    setLists(lists);
    clearState();
    setID(ID + 1);
  };

  const handlerUpdate = () => {
    setVisibleUpdate(!visibleUpdate);

    let fetchedList;
    lists.forEach((list) => {
      if (list.id == id) fetchedList = list;
    });
    fetchedList.items.forEach((item) => {
      if (item.id == activedProduct) {
        item.name = product;
        item.quantity = quantity;
        item.price = price;
      }
    });

    setLists(lists);
  };


  const handlerDelete = () => {
    setVisibleMenu(!visibleMenu);

    lists.forEach((list) => {
      if (list.id == id) {
        list.items = list.items.filter((item) => item.id != activedProduct);
      }
    });

    setLists(lists);
  };
  return (
    <View style={styles.containerInternal}>
      {findList() ? (
        findList().items.map((item, index) => (
          <ListItem
            key={index}
            onLongPress={() => toggleOverlayMenu(item.id)}
            bottomDivider
          >
            <ListItem.Content style={styles.listItemsContent}>
              <Text style={styles.buttonAmount}>{item.quantity}</Text>
              <Text style={styles.buttonItem}>{item.name}</Text>
            </ListItem.Content>
            <Text style={styles.buttonPrice}>R$ {item.price}</Text>
          </ListItem>
        ))
      ) : (
        <Text>Nenhum item na lista</Text>
      )}

      <Overlay isVisible={visibleCreate} onBackdropPress={toggleOverlayCreate}>
        <Input
          label="Produto"
          placeholder="Produto"
          value={product}
          onChangeText={(text) => setProduct(text)}
        />
        <Input
          label="Quantidade"
          placeholder="Quantidade"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <Input
          label="Preço"
          placeholder="Preço"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <Button title="Criar" onPress={handlerCreate} />
      </Overlay>

      <Overlay isVisible={visibleUpdate} onBackdropPress={toggleOverlayUpdate}>
        <Input
          label="Produto"
          placeholder="Produto"
          value={product}
          onChangeText={(text) => setProduct(text)}
        />
        <Input
          label="Quantidade"
          placeholder="Quantidade"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <Input
          label="Preço"
          placeholder="Preço"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <Button title="Atualizar" onPress={handlerUpdate} />
      </Overlay>

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

      <TouchableOpacity
        style={styles.buttonFloat}
        onPress={toggleOverlayCreate}
      >
        <Icon name="plus" size={22} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
};

export default GroceryList;
