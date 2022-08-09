import React, { useContext, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Agenda, Timeline, LocaleConfig } from 'react-native-calendars';

import { DataContext } from "../../context";
import styles from './styles';

import { eventos, eventos2 } from '../../context/dataArrays';

LocaleConfig.locales['es'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sep.','Oct.','Nov.','Dic.'],
    dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
    today: 'Hoy'
  };
  LocaleConfig.defaultLocale = 'es';

export default function CalendarScreen(props) {
    const { url } = useContext(DataContext);
    const [visible, setVisible] = useState(false);
    const [ events, setEvents ] = useState({});
    let today = new Date().toISOString().slice(0, 10);

    const getCalendar = () => {
        fetch(url + "calendar")
            .then((response) => response.json())
            .then((res) => {
                setEvents(res);
            })
            .catch((e) => console.log("Error", e));
    }

    useEffect(() => {
        getCalendar();
    }, [])
    
    return (
      <Agenda
        items={events}
        loadItemsForMonth={(month) => {
          console.log(month);
        }}
        onCalendarToggled={(calendarOpened) => {
          calendarOpened ? setVisible(true) : setVisible(false);
        }}
        selected={today}
        minDate={today}
        maxDate={"2022-12-31"}
        renderItem={(item, firstItemInDay) => {
          return (
            <Timeline
              format24h={true}
              eventTapped={(e) => e}
              events={item.evento}
              scrollToFirst={true}
              start={6}
              end={20}
            />
          );
        }}
        renderEmptyDate={() => {
          return <View />;
        }}
        renderKnob={() => {
          return (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: 25, width: 25 }}
                source={
                  visible
                    ? require("../../../assets/icons/upload.png")
                    : require("../../../assets/icons/down-arrow.png")
                }
              />
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
            <Timeline
              format24h={true}
              scrollToFirst={true}
              start={0}
              end={24}
            />
          );
        }}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        showClosingKnob={true}
        onRefresh={() => {
          getCalendar();
        }}
        refreshing={false}
        refreshControl={null}
        theme={{
          agendaDayTextColor: "blue",
          agendaDayNumColor: "black",
          agendaTodayColor: "red",
          agendaKnobColor: "blue",
        }}
        style={{}}
      />
    );
}