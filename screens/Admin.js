import React, { useContext, useState, useEffect } from "react";

import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import DatePicker from "@dietime/react-native-date-picker";
//galio
import { Block, Text, theme } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";
import { DataContext } from "../context";

export default function Admin(props) {
  const { navigation } = props;
  const { torneos, partidos, usuarios, deportes, equipos, url } =
    useContext(DataContext);
  const [accionSeleccionada, setAccionSeleccionada] = useState({});
  const [deporteSeleccionado, setDeporteSeleccionado] = useState({});
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
  const [equipoSeleccionado, setEquipoSeleccionado] = useState({});
  const [equipoASeleccionado, setEquipoASeleccionado] = useState({});
  const [equipoBSeleccionado, setEquipoBSeleccionado] = useState({});
  const [opcionSeleccionada, setOpcionSeleccionada] = useState({});
  const [torneoSeleccionado, setTorneoSeleccionado] = useState({});
  const [ganadorTorneo, setGanadorTorneo] = useState({});
  const [ganadorPartido, setGanadorPartido] = useState({});
  const [nombreTorneo, setNombreTorneo] = useState({});
  const [fechaPartido, setFechaPartido] = useState(new Date());
  const [fechaTorneo, setFechaTorneo] = useState(new Date());
  const [numero, setNumero] = useState("");
  const [posicion, setPosicion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const styles = StyleSheet.create({
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 300,
      height: 40,
      backgroundColor: "#9bdcfa",
      borderRadius: 5,
    },
    button: {
      borderRadius: 20,
      backgroundColor: "#9bdcfa",
      textAlign: "center",
      width: 300,
      alignSelf: "center",
      margin: 10,
    },
    divider: {
      width: 700,
      borderWidth: 1,
      borderColor: "#E9ECEF",
    },
  });
  const checkInput = (e) => {
    if (accionSeleccionada?.label === "Torneo") {
      if (!opcionSeleccionada) {
        if (
          !nombreTorneo.trim() ||
          !descripcion ||
          !fechaTorneo ||
          !deporteSeleccionado
        ) {
          alert("Por favor, ingrese los datos solicitados.");
        } else {
          handleCrearTorneo();
        }
      } else {
        if (torneoSeleccionado) {
          alert("Por favor, seleccione al equipo ganador.");
        } else {
          handleCrearTorneo();
        }
      }
    } else if (accionSeleccionada.label === "Partido") {
      if (!opcionSeleccionada) {
        if (
          !fechaPartido.trim() ||
          !torneoSeleccionado ||
          !equipoASeleccionado ||
          !equipoBSeleccionado
        ) {
          alert("Por favor, seleccione los datos solicitados.");
        } else {
          handleCrearPartido();
        }
      } else {
        if (equipoSeleccionado) {
          alert("Por favor, seleccione al equipo ganador.");
        } else {
          handleCrearPartido();
        }
      }
    } else if (accionSeleccionada.label === "Jugador") {
      if (
        !usuarioSeleccionado ||
        !numero.trim() ||
        !posicion.trim() ||
        !equipoSeleccionado
      ) {
        alert("Por favor, ingrese los datos solicitados.");
      } else {
        handleCrearJugador();
      }
    }

    handleButtonClick();
  };
  useEffect(() => {
    setOpcionSeleccionada({});
  }, [accionSeleccionada]);
  let indexOpciones = 0;
  const opciones = [
    { key: indexOpciones++, label: "Jugador" },
    { key: indexOpciones++, label: "Partido" },
    { key: indexOpciones++, label: "Torneo" },
  ];
  const partidosMap = partidos.map((item, index) => {
    return { key: index + 1, label: item.fechaPartido };
  });
  const deportesMap = deportes.map((item, index) => {
    return { key: index + 1, label: item.nombre };
  });
  const torneosMap = torneos.map((item, index) => {
    return { key: index + 1, label: item.nombre };
  });
  const equiposMap = equipos.map((item, index) => {
    return { key: index + 1, label: item.nombre };
  });
  const usuariosMap = usuarios.map((item, index) => {
    return {
      key: index + 1,
      label: `${item.nombre} ${item.apellido}`,
    };
  });

  const handleCrearJugador = () => {
    const jugador = {
      numero: numero,
      posicion: posicion,
      equipoId: equipoSeleccionado.key,
      usuarioId: usuarioSeleccionado.key,
    };
    console.log(jugador);
    fetch(url + "jugadores/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(jugador),
    })
      .then((data) => {
        console.log("Success:", data);
        setNumero(0);
        setPosicion(0);
        setEquipoSeleccionado({});
        setUsuarioSeleccionado({});
        alert("¡Jugador creado exitosamente!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleCrearPartido = () => {
    const partido = {
      equipoAId: equipoASeleccionado.key,
      equipoBId: equipoBSeleccionado.key,
      fechaPartido: fechaPartido,
      ganadorId: ganadorPartido.key,
      torneoId: torneoSeleccionado.key,
    };
    console.log(partido);
    fetch(url + "partidos/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(partido),
    })
      .then((data) => {
        console.log("Success:", data);
        setEquipoASeleccionado({});
        setEquipoBSeleccionado({});
        setFechaPartido("");
        setGanadorPartido({});
        setTorneoSeleccionado({});
        alert("¡Partido creado exitosamente!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleCrearTorneo = () => {
    const torneo = {
      nombre: nombreTorneo,
      anioTorneo: fechaTorneo,
      descripcion: descripcion,
      ganadorId: ganadorTorneo.key,
      deporteId: deporteSeleccionado.key,
    };
    console.log(torneo);
    fetch(url + "torneos/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(torneo),
    })
      .then((data) => {
        console.log("Success:", data);
        setNombreTorneo("");
        setFechaTorneo("");
        setDescripcion("");
        setGanadorTorneo({});
        setDeporteSeleccionado({});
        alert("Torneo creado exitosamente!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  function accion() {
    if (accionSeleccionada.label === "Torneo") return torneosMap;
    else if (accionSeleccionada.label === "Partido") return partidosMap;
    else if (accionSeleccionada.label === "Jugador") return usuariosMap;
  }

  return (
    <ScrollView>
      <Block center style={{ marginTop: 20 }}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block>
            <ModalSelector
              data={opciones}
              overlayStyle={{ backgroundColor: "transparent" }}
              initValue={accionSeleccionada.label || "Seleccionar acción"}
              margin="50"
              style={styles.modalSelector}
              type="solid"
              key={accionSeleccionada}
              onChange={(accion) => {
                setAccionSeleccionada(accion);
              }}
              initValueTextStyle={{
                fontWeight: "500",
                color: "black",
              }}
              optionTextStyle={{ color: "black" }}
              optionContainerStyle={{
                backgroundColor: "white",
                width: 400,
                alignSelf: "center",
                borderColor: "#9bdcfa",
              }}
              cancelContainerStyle={{
                backgroundColor: "#9bdcfa",
                width: 400,
                alignSelf: "center",
              }}
              backdropPressToClose={true}
              cancelText="Cancelar"
            />
          </Block>
          <Block style={{ marginTop: 20, marginBottom: 20 }}>
            <Block style={styles.divider} />
          </Block>
          {accionSeleccionada.label && (
            <Block>
              <ModalSelector
                data={accion()}
                overlayStyle={{ backgroundColor: "transparent" }}
                initValue={
                  opcionSeleccionada.label ||
                  (accionSeleccionada.label === "Jugador"
                    ? "Seleccionar usuario"
                    : `Seleccionar ${accionSeleccionada.label}`)
                }
                margin="50"
                style={styles.modalSelector}
                type="solid"
                key={opcionSeleccionada}
                onChange={(opcion) => {
                  accionSeleccionada.label === "Jugador"
                    ? setUsuarioSeleccionado(opcion)
                    : setOpcionSeleccionada(opcion);
                }}
                initValueTextStyle={{
                  fontWeight: "500",
                  color: "black",
                }}
                optionTextStyle={{ color: "black" }}
                optionContainerStyle={{
                  backgroundColor: "white",
                  width: 400,
                  alignSelf: "center",
                  borderColor: "#9bdcfa",
                }}
                cancelContainerStyle={{
                  backgroundColor: "#9bdcfa",
                  width: 400,
                  alignSelf: "center",
                }}
                backdropPressToClose={true}
                cancelText="Cancelar"
              />
              <Block style={{ marginTop: 20, marginBottom: 20 }}>
                <Block style={styles.divider} />
              </Block>
            </Block>
          )}
        </Block>
        {accionSeleccionada.label === "Partido" && (
          <Block>
            {!opcionSeleccionada.label && (
              <Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Equipo A:
                  </Text>
                  <ModalSelector
                    data={equiposMap}
                    overlayStyle={{ backgroundColor: "transparent" }}
                    initValue={
                      equipoASeleccionado.label || "Seleccionar Equipo A"
                    }
                    margin="50"
                    style={styles.modalSelector}
                    type="solid"
                    key={equipoASeleccionado}
                    onChange={(equipo) => {
                      setEquipoASeleccionado(equipo);
                    }}
                    initValueTextStyle={{
                      fontWeight: "500",
                      color: "black",
                    }}
                    optionTextStyle={{ color: "black" }}
                    optionContainerStyle={{
                      backgroundColor: "white",
                      width: 400,
                      alignSelf: "center",
                      borderColor: "#9bdcfa",
                    }}
                    cancelContainerStyle={{
                      backgroundColor: "#9bdcfa",
                      width: 400,
                      alignSelf: "center",
                    }}
                    backdropPressToClose={true}
                    cancelText="Cancelar"
                  />
                </Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Equipo B:
                  </Text>
                  <ModalSelector
                    data={equiposMap}
                    overlayStyle={{ backgroundColor: "transparent" }}
                    initValue={
                      equipoBSeleccionado.label || "Seleccionar Equipo B"
                    }
                    margin="50"
                    style={styles.modalSelector}
                    type="solid"
                    key={equipoBSeleccionado}
                    onChange={(equipo) => {
                      setEquipoBSeleccionado(equipo);
                    }}
                    initValueTextStyle={{
                      fontWeight: "500",
                      color: "black",
                    }}
                    optionTextStyle={{ color: "black" }}
                    optionContainerStyle={{
                      backgroundColor: "white",
                      width: 400,
                      alignSelf: "center",
                      borderColor: "#9bdcfa",
                    }}
                    cancelContainerStyle={{
                      backgroundColor: "#9bdcfa",
                      width: 400,
                      alignSelf: "center",
                    }}
                    backdropPressToClose={true}
                    cancelText="Cancelar"
                  />
                </Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Fecha partido:
                  </Text>
                  <Block style={{ height: 80 }}>
                    <DatePicker
                      height={90}
                      width={300}
                      value={fechaPartido}
                      startYear={2000}
                      endYear={2100}
                      onChange={(value) => setFechaPartido(value)}
                      format="dd-mm-yyyy"
                    />
                  </Block>
                </Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Torneo:
                  </Text>
                  <ModalSelector
                    data={torneosMap}
                    overlayStyle={{ backgroundColor: "transparent" }}
                    initValue={torneoSeleccionado.label || "Seleccionar Torneo"}
                    margin="50"
                    style={styles.modalSelector}
                    type="solid"
                    key={torneoSeleccionado}
                    onChange={(torneo) => {
                      setTorneoSeleccionado(torneo);
                    }}
                    initValueTextStyle={{
                      fontWeight: "500",
                      color: "black",
                    }}
                    optionTextStyle={{ color: "black" }}
                    optionContainerStyle={{
                      backgroundColor: "white",
                      width: 400,
                      alignSelf: "center",
                      borderColor: "#9bdcfa",
                    }}
                    cancelContainerStyle={{
                      backgroundColor: "#9bdcfa",
                      width: 400,
                      alignSelf: "center",
                    }}
                    backdropPressToClose={true}
                    cancelText="Cancelar"
                  />
                </Block>
              </Block>
            )}

            {opcionSeleccionada.label && (
              <Block center row style={{ marginBottom: 10 }}>
                <Text h5 style={{ marginRight: 20 }}>
                  Equipo Ganador:
                </Text>
                <ModalSelector
                  data={equiposMap}
                  overlayStyle={{ backgroundColor: "transparent" }}
                  initValue={
                    ganadorPartido.label || "Seleccionar Equipo Ganador"
                  }
                  margin="50"
                  style={styles.modalSelector}
                  type="solid"
                  key={ganadorPartido}
                  onChange={(equipo) => {
                    setGanadorPartido(equipo);
                  }}
                  initValueTextStyle={{
                    fontWeight: "500",
                    color: "black",
                  }}
                  optionTextStyle={{ color: "black" }}
                  optionContainerStyle={{
                    backgroundColor: "white",
                    width: 400,
                    alignSelf: "center",
                    borderColor: "#9bdcfa",
                  }}
                  cancelContainerStyle={{
                    backgroundColor: "#9bdcfa",
                    width: 400,
                    alignSelf: "center",
                  }}
                  backdropPressToClose={true}
                  cancelText="Cancelar"
                />
              </Block>
            )}

            <Button
              style={styles.button}
              textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
              onPress={checkInput}
            >
              Crear
            </Button>
          </Block>
        )}
        {accionSeleccionada.label === "Torneo" && (
          <Block>
            {!opcionSeleccionada.label && (
              <Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Nombre:
                  </Text>
                  <Input
                    placeholder="..."
                    style={{
                      borderColor: argonTheme.COLORS.INFO,
                      borderRadius: 5,
                      backgroundColor: "#fff",
                      width: 400,
                      alignSelf: "center",
                    }}
                    iconContent={<></>}
                    onChangeText={(text) => setNombreTorneo(text)}
                    value={nombreTorneo}
                  />
                </Block>
                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Descripción:
                  </Text>
                  <Input
                    placeholder="..."
                    style={{
                      borderColor: argonTheme.COLORS.INFO,
                      borderRadius: 5,
                      backgroundColor: "#fff",
                      width: 400,
                      alignSelf: "center",
                    }}
                    iconContent={<></>}
                    onChangeText={(text) => setDescripcion(text)}
                    value={descripcion}
                  />
                </Block>

                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Año:
                  </Text>
                  <Block style={{ height: 80 }}>
                    <DatePicker
                      height={90}
                      width={300}
                      value={fechaTorneo}
                      startYear={2000}
                      endYear={2100}
                      onChange={(value) => setFechaTorneo(value)}
                      format="dd-mm-yyyy"
                    />
                  </Block>
                </Block>

                <Block center row style={{ marginBottom: 10 }}>
                  <Text h5 style={{ marginRight: 20 }}>
                    Deporte:
                  </Text>
                  <ModalSelector
                    data={deportesMap}
                    overlayStyle={{ backgroundColor: "transparent" }}
                    initValue={
                      deporteSeleccionado.label || "Seleccionar Deporte"
                    }
                    margin="50"
                    style={styles.modalSelector}
                    type="solid"
                    key={deporteSeleccionado}
                    onChange={(deporte) => {
                      setDeporteSeleccionado(deporte);
                    }}
                    initValueTextStyle={{
                      fontWeight: "500",
                      color: "black",
                    }}
                    optionTextStyle={{ color: "black" }}
                    optionContainerStyle={{
                      backgroundColor: "white",
                      width: 400,
                      alignSelf: "center",
                      borderColor: "#9bdcfa",
                    }}
                    cancelContainerStyle={{
                      backgroundColor: "#9bdcfa",
                      width: 400,
                      alignSelf: "center",
                    }}
                    backdropPressToClose={true}
                    cancelText="Cancelar"
                  />
                </Block>
              </Block>
            )}

            {opcionSeleccionada.label && (
              <Block center row style={{ marginBottom: 10 }}>
                <Text h5 style={{ marginRight: 20 }}>
                  Ganador:
                </Text>
                <ModalSelector
                  data={equiposMap}
                  overlayStyle={{ backgroundColor: "transparent" }}
                  initValue={
                    ganadorTorneo.label || "Seleccionar Equipo Ganador"
                  }
                  margin="50"
                  style={styles.modalSelector}
                  type="solid"
                  key={ganadorTorneo}
                  onChange={(equipo) => {
                    setGanadorTorneo(equipo);
                  }}
                  initValueTextStyle={{
                    fontWeight: "500",
                    color: "black",
                  }}
                  optionTextStyle={{ color: "black" }}
                  optionContainerStyle={{
                    backgroundColor: "white",
                    width: 400,
                    alignSelf: "center",
                    borderColor: "#9bdcfa",
                  }}
                  cancelContainerStyle={{
                    backgroundColor: "#9bdcfa",
                    width: 400,
                    alignSelf: "center",
                  }}
                  backdropPressToClose={true}
                  cancelText="Cancelar"
                />
              </Block>
            )}

            <Button
              style={styles.button}
              textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
              onPress={checkInput}
            >
              Crear
            </Button>
          </Block>
        )}
        {accionSeleccionada.label === "Jugador" && (
          <Block>
            <Block center row style={{ marginBottom: 10 }}>
              <Text h5 style={{ marginRight: 20 }}>
                Número:
              </Text>
              <Input
                placeholder="..."
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                  width: 400,
                  alignSelf: "center",
                }}
                iconContent={<></>}
                onChangeText={(text) => setNumero(parseInt(text))}
                value={numero}
              />
            </Block>
            <Block center row style={{ marginBottom: 10 }}>
              <Text h5 style={{ marginRight: 20 }}>
                Posición:
              </Text>
              <Input
                placeholder="..."
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                  width: 400,
                  alignSelf: "center",
                }}
                iconContent={<></>}
                onChangeText={(text) => setPosicion(text)}
                value={posicion}
              />
            </Block>
            <Block center row style={{ marginBottom: 10 }}>
              <Text h5 style={{ marginRight: 20 }}>
                Equipo:
              </Text>
              <ModalSelector
                data={equiposMap}
                overlayStyle={{ backgroundColor: "transparent" }}
                initValue={equipoSeleccionado.label || "Seleccionar Equipo"}
                margin="50"
                style={styles.modalSelector}
                type="solid"
                key={equipoSeleccionado}
                onChange={(equipo) => {
                  setEquipoSeleccionado(equipo);
                }}
                initValueTextStyle={{
                  fontWeight: "500",
                  color: "black",
                }}
                optionTextStyle={{ color: "black" }}
                optionContainerStyle={{
                  backgroundColor: "white",
                  width: 400,
                  alignSelf: "center",
                  borderColor: "#9bdcfa",
                }}
                cancelContainerStyle={{
                  backgroundColor: "#9bdcfa",
                  width: 400,
                  alignSelf: "center",
                }}
                backdropPressToClose={true}
                cancelText="Cancelar"
              />
            </Block>

            <Button
              style={styles.button}
              textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
              onPress={checkInput}
            >
              Crear
            </Button>
          </Block>
        )}
      </Block>
    </ScrollView>
  );
}
