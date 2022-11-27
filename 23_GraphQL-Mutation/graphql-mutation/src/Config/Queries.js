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

export const InsertPassangers = gql`
  mutation insertPassanger($nama: String, $Umur: Int, $Jenis_Kelamin: String) {
    insert_daftar_pengunjung_data_passengers(objects: { nama: $nama, Umur: $Umur, Jenis_Kelamin: $Jenis_Kelamin }) {
      returning {
        id
      }
    }
  }
`;

export const DeletePassangers = gql`
  mutation DeletePassanger($id: Int) {
    delete_daftar_pengunjung_data_passengers(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
