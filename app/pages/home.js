/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import ApiRepository from '../data/api-repository';
import Item from '../component/job-item';

const Home = ({navigation}) => {

  const [selectedId, setSelectedId] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [fullJob, setFullJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ApiRepository.getJobList().then((json) => {
      setJobs(json);
      setFullJob(json);
      setIsLoading(false);
    });
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FAFAFA' : '#FFFFFF';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
        nav={navigation}
      />
    );
  };

  const onSearch = (query) => {
    const searchResult = fullJob.filter((data) => data.description.toLowerCase().includes(query.toLowerCase()));
    setJobs(searchResult);

    if (query === '') {
      setJobs(fullJob);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF', marginTop: -16}}>
        <View style={{marginEnd: 16, marginStart: 16, marginTop: 16, marginBottom: 10}}>
          <TextInput placeholder="Search" style={styles.input} onChangeText={onSearch} />
        </View>

        {isLoading && (<ActivityIndicator animating={true} size="large" color="#0000ff" style={styles.ActivityIndicator} /> )}

        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 12,
    borderRadius: 8,
  },
  image: {
    width: 50,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
 },
});

export default Home;
