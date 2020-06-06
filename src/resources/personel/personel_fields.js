import jenis_personel from "../jenis_personel";
import jenis_personel_fields from "../jenis_personel/jenis_personel_fields";
import jenis_kelamin from "../jenis_kelamin";
import jenis_kelamin_fields from "../jenis_kelamin/jenis_kelamin_fields";
import golongan_darah from "../golongan_darah";
import golongan_darah_fields from "../golongan_darah/golongan_darah_fields";
import jenjang_kepangkatan from "../jenjang_kepangkatan";
import jenjang_kepangkatan_fields from "../jenjang_kepangkatan/jenjang_kepangkatan_fields";
import pangkat from "../pangkat";
import pangkat_fields from "../pangkat/pangkat_fields";

export default {
  id: {
    source: "id",
    label: "Id",
  },
  jenis_personel: {
    source: jenis_personel.name + "_id",
    label: jenis_personel.options.label,
    reference: jenis_personel.name,
    sort: {
      field: jenis_personel_fields.id.source,
      order: "ASC",
    },
  },
  nama: {
    source: "nama",
    label: "Nama",
  },
  no_identitas: {
    source: "no_identitas",
    label: "No. Identitas",
  },
  tempat_lahir: {
    source: "tempat_lahir",
    label: "Tempat Lahir",
  },
  tanggal_lahir: {
    source: "tanggal_lahir",
    label: "Tanggal Lahir",
  },
  jenis_kelamin: {
    source: jenis_kelamin.name + "_id",
    label: jenis_kelamin.options.label,
    reference: jenis_kelamin.name,
    sort: {
      field: jenis_kelamin_fields.id.source,
      order: "ASC",
    },
  },
  golongan_darah: {
    source: golongan_darah.name + "_id",
    label: golongan_darah.options.label,
    reference: golongan_darah.name,
    sort: {
      field: golongan_darah_fields.id.source,
      order: "ASC",
    },
  },
  jenjang_kepangkatan: {
    source: jenjang_kepangkatan.name + "_id",
    label: jenjang_kepangkatan.options.label,
    reference: jenjang_kepangkatan.name,
    sort: {
      field: jenjang_kepangkatan_fields.id.source,
      order: "ASC",
    },
  },
  pangkat: {
    source: pangkat.name + "_id",
    label: pangkat.options.label,
    reference: pangkat.name,
    sort: {
      field: pangkat_fields.id.source,
      order: "ASC",
    },
  },
};
