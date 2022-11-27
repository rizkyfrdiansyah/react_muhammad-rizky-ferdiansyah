import { gql } from "@apollo/client";

export const GetAllPassengers = gql`
  query MyQuery {
    daftar_pengunjung_data_passengers {
      id
      nama
      Umur
      Jenis_Kelamin
    }
  }
`;

export const GetPassengerById = gql`
  query MyQuery {
    daftar_pengunjung_data_passengers(where: { id: { _eq: $eq } }) {
      id
      nama
      Umur
      Jenis_Kelamin
    }
  }
`;
