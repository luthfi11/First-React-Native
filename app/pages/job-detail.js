/* eslint-disable prettier/prettier */
/* eslint-disable no-new-wrappers */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, Image, Linking, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';
import ApiRepository from '../data/api-repository';

const JobDetail = ({route}) => {
    const { id } = route.params;
    const jobId = JSON.stringify(id);
    let eventstring = new String();
    eventstring = jobId.toString().replace(/"/g, '');

    const [job, setJob] = useState({});

    useEffect(() => {
        ApiRepository.getJobDetail(eventstring).then((json) => setJob(json));
    }, );

    const fullTime = (data) => {
        if (data === 'Full Time') {return 'Yes';}
        else {return 'No';}
    };

    const contentWidth = useWindowDimensions().width;

    return (
        <ScrollView style={{padding: 16, backgroundColor: '#FFFFFF'}}>
            <Text>Company</Text>
            <View style={{flexDirection: 'row', borderRadius: 8, borderWidth: 1, borderColor: '#CCCCCC', padding: 10, marginTop: 6}}>
                <Image source={{uri: job.company_logo}} style={{width: 80, height: 80, flex: 1, marginEnd: 16}} />
                <View style={{flex: 3, justifyContent: 'center'}}>
                    <Text>{job.title}</Text>
                    <Text style={{color: '#666666'}}>{job.location}</Text>
                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(`${job.url}`)}>Go To Website</Text>
                </View>
            </View>

            <Text style={{marginTop: 20}}>Job Specification</Text>
            <View style={{borderRadius: 8, borderWidth: 1, borderColor: '#CCCCCC', padding: 10, marginTop: 6, marginBottom: 30}}>
                <Text style={{color: '#555555'}}>Title</Text>
                <Text>{job.title}</Text>

                <Text style={{marginTop: 12, color: '#555555'}}>Fulltime</Text>
                <Text>{fullTime(job.type)}</Text>

                <Text style={{marginTop: 12, color: '#555555'}}>Description</Text>
                {job.description ? <HTML source={{ html: job.description }} contentWidth={contentWidth} /> : <Text>None</Text> }

                <Text style={{marginTop: 12, color: '#555555'}}>How To Apply</Text>
                {job.description ? <HTML source={{ html: job.how_to_apply }} contentWidth={contentWidth} /> : <Text>None</Text> }
            </View>

        </ScrollView>
    );
};

export default JobDetail;
