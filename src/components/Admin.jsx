import React, { useState } from "react";
import NP1 from "../assets/NP1.png"; // L'image pour le logo
import { Link } from "react-router";

// Composant FormField : champ de saisie générique pour chaque formulaire
const FormField = ({ label, type = "text", value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-red-500"
    />
  </div>
);

// Composant ServicesForm : formulaire pour la gestion des services
const ServicesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: "",
    icon: "",
    image: "",
    presentation: "",
    fonctionnement: "",
    etapes: "",
    opportunites: "",
    perspectives: "",
    objectif: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envoie les données au parent
    setFormData({
      description: "",
      icon: "",
      image: "",
      presentation: "",
      fonctionnement: "",
      etapes: "",
      opportunites: "",
      perspectives: "",
      objectif: "",
    }); // Réinitialise le formulaire après soumission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Services</h2>
      <FormField
        label="Description"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <FormField
        label="Icon"
        value={formData.icon}
        onChange={handleChange}
        name="icon"
      />
      <FormField
        label="Image"
        type="file"
        onChange={handleFileChange}
        name="image"
      />
      <FormField
        label="Présentation"
        value={formData.presentation}
        onChange={handleChange}
        name="presentation"
      />
      <FormField
        label="Fonctionnement"
        value={formData.fonctionnement}
        onChange={handleChange}
        name="fonctionnement"
      />
      <FormField
        label="Étapes"
        value={formData.etapes}
        onChange={handleChange}
        name="etapes"
      />
      <FormField
        label="Opportunités"
        value={formData.opportunites}
        onChange={handleChange}
        name="opportunites"
      />
      <FormField
        label="Perspectives"
        value={formData.perspectives}
        onChange={handleChange}
        name="perspectives"
      />
      <FormField
        label="Objectif"
        value={formData.objectif}
        onChange={handleChange}
        name="objectif"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};

// Composant FormationsForm : formulaire pour la gestion des formations
const FormationsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    duree: "",
    image: "",
    video: "",
    dateDebut: "",
    prix: "",
    niveau: "",
    avis: "",
    objectif: "",
    perspective: "",
    opportunite: "",
    debouche: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envoie les données au parent
    setFormData({
      titre: "",
      description: "",
      duree: "",
      image: "",
      video: "",
      dateDebut: "",
      prix: "",
      niveau: "",
      avis: "",
      objectif: "",
      perspective: "",
      opportunite: "",
      debouche: "",
    }); // Réinitialise le formulaire après soumission
  };

  return (
    //{/* POUR LE BACK END ‼️⚠️*/}
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Formations</h2>
      <FormField
        label="Titre"
        value={formData.titre}
        onChange={handleChange}
        name="titre"
      />
      <FormField
        label="Description"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <FormField
        label="Durée"
        value={formData.duree}
        onChange={handleChange}
        name="duree"
      />
      <FormField
        label="Image"
        type="file"
        onChange={handleFileChange}
        name="image"
      />
      <FormField
        label="Vidéo"
        type="file"
        onChange={handleFileChange}
        name="video"
      />
      <FormField
        label="Date de début"
        type="date"
        value={formData.dateDebut}
        onChange={handleChange}
        name="dateDebut"
      />
      <FormField
        label="Prix"
        type="number"
        value={formData.prix}
        onChange={handleChange}
        name="prix"
      />
      <FormField
        label="Niveau"
        value={formData.niveau}
        onChange={handleChange}
        name="niveau"
      />
      <FormField
        label="Avis"
        value={formData.avis}
        onChange={handleChange}
        name="avis"
      />
      <FormField
        label="Objectif"
        value={formData.objectif}
        onChange={handleChange}
        name="objectif"
      />
      <FormField
        label="Perspective"
        value={formData.perspective}
        onChange={handleChange}
        name="perspective"
      />
      <FormField
        label="Opportunité"
        value={formData.opportunite}
        onChange={handleChange}
        name="opportunite"
      />
      <FormField
        label="Débouché"
        value={formData.debouche}
        onChange={handleChange}
        name="debouche"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};

// Composant AvisForm : formulaire pour la gestion des avis
const AvisForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    commentaire: "",
    imageUtilisateur: "",
    nom: "",
    prenom: "",
    entreprise: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envoie les données au parent
    setFormData({
      commentaire: "",
      imageUtilisateur: "",
      nom: "",
      prenom: "",
      entreprise: "",
    }); // Réinitialise le formulaire après soumission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Avis</h2>
      <FormField
        label="Commentaire"
        value={formData.commentaire}
        onChange={handleChange}
        name="commentaire"
      />
      <FormField
        label="Image Utilisateur"
        type="file"
        onChange={handleFileChange}
        name="imageUtilisateur"
      />
      <FormField
        label="Nom"
        value={formData.nom}
        onChange={handleChange}
        name="nom"
      />
      <FormField
        label="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        name="prenom"
      />
      <FormField
        label="Entreprise"
        value={formData.entreprise}
        onChange={handleChange}
        name="entreprise"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};

// Composant principal Admin
const Admin = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [formData, setFormData] = useState({
    services: [],
    formations: [],
    avis: [],
  });

  const handleFormSubmit = (formName, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [formName]: [...prevData[formName], data], // Ajoute les données du formulaire à la collection correspondante
    }));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-red-900 bg-opacity-80 backdrop-blur-md text-white p-6 flex flex-col justify-between fixed h-full">
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Admin Dashboard{" "}
            <span className=" text-[30px] font-black text-violet-700">D&B</span>
          </h2>
          <nav>
            <button
              className={`block w-full text-left py-2 px-4 rounded ${
                activeTab === "services" ? "bg-red-700" : ""
              }`}
              onClick={() => setActiveTab("services")}
            >
              Services
            </button>
            <button
              className={`block w-full text-left py-2 px-4 rounded mt-2 ${
                activeTab === "formations" ? "bg-red-700" : ""
              }`}
              onClick={() => setActiveTab("formations")}
            >
              Formations
            </button>
            <button
              className={`block w-full text-left py-2 px-4 rounded mt-2 ${
                activeTab === "avis" ? "bg-red-700" : ""
              }`}
              onClick={() => setActiveTab("avis")}
            >
              Avis
            </button>
          </nav>
        </div>
        <Link to="/">
          <img src={NP1} alt="Logo" className="w-30 mx-auto mt-6" />
        </Link>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full">
        {activeTab === "services" && (
          <ServicesForm
            onSubmit={(data) => handleFormSubmit("services", data)}
          />
        )}
        {activeTab === "formations" && (
          <FormationsForm
            onSubmit={(data) => handleFormSubmit("formations", data)}
          />
        )}
        {activeTab === "avis" && (
          <AvisForm onSubmit={(data) => handleFormSubmit("avis", data)} />
        )}
      </main>
    </div>
  );
};

export default Admin;
