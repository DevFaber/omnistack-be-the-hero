import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/hero_logo.jpg";
import "./styles.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    api
      .get("profiles", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert("Falha ao deletar o registro!");
    }
  }

  function handleLogout() {
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span> Bem vinda, {ongName} </span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo Caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <div className="case-content">
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESRIÇÂO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}
              </p>

              <button onClick={() => handleDelete(incident.id)} type="button">
                <FiTrash2 size={20} color="#A8A8B3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
