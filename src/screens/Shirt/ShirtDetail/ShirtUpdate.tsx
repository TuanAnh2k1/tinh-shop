import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, TextInput, ScrollView} from 'react-native';
import {NavBar} from '../../../components';
import GetColors from '../../../utils/CommonColors';

const ShirtUpdate = (props: {navigation: any}) => {
  const {navigation} = props;
  const data = props.route.params.data;
  const dataUser = props.route.params.dataUser;
  const [name, setName] = useState('');
  const [describe, setDescribe] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');
  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    setName(data.name);
    setDescribe(data.describe);
    setImage(data.image);
    setPrice(data.price);
    setSupplier(data.supplier);
    setTotal(data.total);
    setLoading(false);
  }, [
    data.describe,
    data.image,
    data.price,
    data.supplier,
    data.name,
    data.total,
  ]);

  const handleUpdateShirt = async () => {
    // Gửi thông tin đăng nhập đến API
    await fetch('https://musicfivestar.onrender.com/shirt/updateShirt', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: data._id,
        name: name,
        describe: describe,
        image: image,
        price: price,
        supplier: supplier,
        total: total,
      }),
    })
      .then(response => response.json())
      .then(json => {
        // Xử lý phản hồi từ API
        if (json.message) {
          // Update shirt thành công
          setLoading(false);
          navigation.navigate('Shirt', {loading: true});
        } else {
          // Update shirt thất bại
          console.log(json.error);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <NavBar
        title={'Update Shirt'}
        style={{backgroundColor: GetColors().MAIN}}
        titleStyle={{color: GetColors().WHITE}}
        onPressLeft={() => {
          navigation.navigate('Shirt');
        }}
      />
      <ScrollView style={styles.content}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Tên sản phẩm"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Mô tả"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setDescribe(text)}
            value={describe}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Link hình ảnh"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setImage(text)}
            value={image}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Giá"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setPrice(text)}
            value={price}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Nhà cung cấp"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setSupplier(text)}
            value={supplier}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContent}
            placeholder="Tổng số lượng"
            placeholderTextColor="#000"
            onChangeText={(text: string) => setTotal(text)}
            value={total}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContent}>
        <View style={styles.btnText}>
          <Button
            title="Thoát"
            color={GetColors().BG_MODAL}
            onPress={() => {
              navigation.navigate('ShirtDetail', {
                dataUser: dataUser,
                data: data,
              });
            }}
          />
        </View>
        <View style={styles.btnText}>
          <Button
            title="Cập nhật sản phẩm"
            color={GetColors().MAIN}
            onPress={handleUpdateShirt}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GetColors().BORDER,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    paddingVertical: 8,
    borderColor: GetColors().BG_MODAL,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 8,
  },
  inputContent: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  btnContent: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  btnText: {
    flex: 1,
    paddingHorizontal: 4,
  },
});

export default ShirtUpdate;
