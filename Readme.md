# SiAPI
## RestAPI
`https://api-si-sehat.vercel.app` 

## Status Code 
- 100-199     : informational responses.
- 200 - 299   : successful responses. [200] Success
- 300-399     : redirect.
- 400-499     : client error. [400] Bad Request, [404] Not Found
- 500-599     : server errors.

## Endpoint
## POST Obat
[ Response ]
```JSON

```
## GET Detail Obat
`/drug/{id?}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "id": "nfvFxxkDBFpKjRdfCO2k",
        "data": {
            "data": {
                "publish_date": "2021-12-01T11:44:47Z",
                "about": "desc obat",
                "rules": [
                    "rulesObat"
                ],
                "id": 38,
                "Disease-Related": [
                    "nyeri",
                    "demam"
                ],
                "short_desc": "Short-DESC.",
                "categories": "obat-demam",
                "title": "title-obat",
                "thumbnail_url": "gambar-obat",
                "kegunaan": "Manfaat dan Kegunaan Obat",
                "warning": [
                    "Pseudoephedrine yang ada di dalam Paramex Flu dan Batuk termasuk dalam obat kategori C. Artinya, studi pada binatang percobaan memperlihatkan adanya efek samping terhadap janin, meski belum ada studi terkontrol pada ibu hamil.",
                    "Sebaiknya tidak mengonsumsi Paramex Flu dan Batuk jika Anda sedang melakukan aktivitas yang butuh kewaspadaan, seperti mengemudi.",
                    "Beritahukan dokter jika Anda sedang dalam keadaan hamil dan menyusui"
                ],
                "reviewer_name": "Reviewer Name"
            }
        }
    }
    ```
</details>

## GET All Obat
`/drug`
<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "datasDrug": [
            {
                "id": "d29GbsTEWN7x85Ww5c0Q",
                "data": {
                    "Disease-Related": [
                        "nyeri",
                        "demam"
                    ],
                    "publish_date": "2022-04-06T13:59:15Z",
                    "reviewer_name": "Tim Apoteker Klikdokter",
                    "warning": [],
                    "kegunaan": "",
                    "about": "",
                    "categories": "obat-demam",
                    "title": "Paracetamol",
                    "thumbnail_url": "image.google.com",
                    "short_desc": "",
                    "rules": [
                        "Anak 9-12 tahun: 3-4 sendok takar (15-20 ml), 3-4 kali per hari",
                        "Anak 6-9 tahun: 2-3 sendok takar (10-15 ml), 3-4 kali per hari",
                    ]
                }
            },
            {
                "id": "uDB1r4aCqi1Aec2H4Ugp",
                "data": {
                    "publish_date": "2022-04-06T13:59:15Z",
                    "warning": [
                        "Mengonsumsi Paracetamol"
                    ],
                    "thumbnail_url": "image.google.com",
                    "kegunaan": "Manfaat Paracetamol adalah untuk meredakan nyeri ringan hingga sedang. Selain itu, fungsi Paracetamol adalah sebagai penurun demam.",
                    "disease_related": [
                        "nyeri",
                        "demam"
                    ],
                    "about": "",
                    "rules": [
                        "Anak 2-6 tahun: 1-2 sendok takar (5-10 ml), 3-4 kali per hari",
                        "Anak 1-2 tahun: 1 sendok takar (5 ml), 3-4 kali per hari",
                    ],
                    "reviewer_name": "",
                    "categories": "obat-demam",
                    "title": "Paracetamol",
                }
            }
        ]
    }
    ```
</details>

## PUT Update Obat
`/drug/{id?}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "message": "Obat berhasil diperbaharui",
        "data": {
            "reviewer_name": "Udin Pratama",
            "kegunaan": "Manfaat Paracetamol adalah untuk meredakan nyeri ringan hingga sedang. Selain itu, fungsi Paracetamol adalah sebagai penurun demam.",
            "id": 52.16678495652618,
            "Disease-Related": [
                "nyeri",
                "demam"
            ],
            "rules": [
                "Anak 9-12 tahun: 3-4 sendok takar (15-20 ml), 3-4 kali per hari",
                "Anak 6-9 tahun: 2-3 sendok takar (10-15 ml), 3-4 kali per hari",
                "Anak 2-6 tahun: 1-2 sendok takar (5-10 ml), 3-4 kali per hari",
                "Anak 1-2 tahun: 1 sendok takar (5 ml), 3-4 kali per hari",
                "Anak di bawah 1 tahun: ½ sendok takar (2.5 ml), 3-4 kali per hari"
            ],
            "publish_date": "2022-11-25T13:45:03.364Z",
            "title": "Paracetamol",
            "about": "Demam merupakan salah satu gejala yang muncul ketika ada infeksi di dalam tubuh. Respons ini muncul ketika tubuh bereaksi dalam melawan kuman. Seseorang dikatakan demam ketika suhu tubuh mencapai lebih dari 38 derajat Celcius. Untuk membantu meredakan demam, Anda dapat mengonsumsi Paracetamol, Perlu diketahui, paracetamol hanya membantu menurunkan gejala demam dan mengurangi rasa nyeri, bukan untuk mengatasi pemicu utama dari sakit tersebut",
            "short_desc": "Paracetamol adalah obat untuk menurunkan demam serta meredakan nyeri ringan hingga sedang.",
            "categories": "obat-demam",
            "warning": [
                "Mengonsumsi Paracetamol yang melebihi dosis dapat menyebabkan kerusakan hati, kadang-kadang cukup serius untuk memerlukan transplantasi hati atau menyebabkan kematian",
                "Beritahu dokter jika Anda memiliki riwayat penyakit hati dan gangguan ginjal",
                "Konsumsi alkohol bersama Paracetamol dapat meningkatkan risiko kerusakan hati",
                "Sebaiknya konsultasikan dengan dokter sebelum bumil mengonsumsi Paracetamol.",
                "Paracetamol dapat masuk ke dalam ASI. Namun, Paracetamol masih aman untuk dikonsumsi ibu menyusui."
            ],
            "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg"
        }
    }
    ```
</details>

## DELETE Obat
`/drug/{id?}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "message": "obat berhasil dihapus"
    }
    ```
</details>

## POST Add Disease
`/disease`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "message": "Penyakit berhasil ditambahkan",
        "data": {
            "id": "RL7RKZThJ1MW7jRraG1T",
            "data": {
                "title": "test",
                "short_desc": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk.",
                "publish_date": "2021-08-19T16:22:02Z",
                "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                "reviewer_name": "Tim Apoteker Klikdokter",
                "categories": "kesehatan_umum",
                "about": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk. Hal ini dapat terjadi akibat asupan cairan yang berkurang atau pengeluaran cairan yang berlebih.Pengeluaran cairan dari tubuh terjadi melalui keringat, air mata, muntah, buang air kecil, maupun buang air besar.Seseorang yang mengalami dehidrasi membutuhkan penanganan segera untuk mencegah komplikasi yang dapat timbul.",
                "obat": [
                    "air",
                    "rehidrasi_oral"
                ],
                "medication": "Pada kondisi dehidrasi ringan-sedang di mana asupan makanan dan minuman masih baik, untuk bayi dan anak yang mengalami dehidrasi akibat dari diare, muntah, atau demam, dapat dilakukan pemberian cairan rehidrasi oral sesuai instruksi dari dokter.Cairan ini mengandung air dan garam dalam proporsi spesifik untuk mengganti baik ciaran maupun elektrolit yang hilang. Pada orang dewasa, dapat disarankan untuk meningkatkan asupan air dan cairan lainnya.Pada kondisi dehidrasi berat, penanganan dapat dilakukan di rumah sakit dengan cairan dan garam yang dapat diberikan secara intravena (melalui infus). Dengan cara ini, penggantian cairan dan elektrolit yang hilang dapat lebih cepat dan juga merupakan cara yang efektif apabila asupan melalui mulut atau saluran cerna tidak memungkinkan.",
                "symptom": "haus,minum",
                "diagonsis": [
                    "tekanan darah yang rendah",
                    "denyut nadi yang cepat",
                    "produksi air kemih yang berkurang dan berwarna kuning pekat.",
                    "Diagnosis dari penyakit yang mendasari kondisi dehidrasi tersebut dapat ditentukan dengan wawancara medis dan pemeriksaan fisis secara langsung yang menyeluruh sesuai dengan keluhan yang dialami oleh pasien, serta pemeriksaan penunjang tertentu bila dibutuhkan."
                ],
                "reviewed": ""
            }
        }
    }
    ```
</details>

## GET All Disease
`/disease`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "datasDisease": [
            {
                "id": "0uMSJqMnfkBnYffjNsxQ",
                "data": {
                    "symptom": {
                        "1": "haus_berlebihan",
                        "2": "berkeringat",
                        "3": "lemas"
                    },
                    "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                    "diagonsis": [
                        "tekanan darah yang rendah",
                        "denyut nadi yang cepat"
                    ],
                    "about": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk. Hal ini dapat terjadi akibat asupan cairan mencegah komplikasi yang dapat timbul.",
                    "categories": "kesehatan_umum",
                    "medication": "Pada kondisi dehidrasi ringan-sedang di mana asupan makanan dan memungkinkan.",
                    "reviewed": "",
                    "publish_date": "2021-08-19T16:22:02Z",
                    "reviewer_name": "Tim Apoteker Klikdokter",
                    "short_desc": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk.",
                    "obat": [
                        "air",
                        "rehidrasi_oral"
                    ],
                    "title": "Dehidrasi_Berat"
                }
            },
            {
                "id": "HQ7f2wX7kG6ZAlLQappT",
                "data": {
                    "about": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih mencegah komplikasi yang dapat timbul.",
                    "categories": "kesehatan_umum",
                    "medication": "merupakan cara yang efektif apabila asupan melalui mulut atau saluran cerna tidak memungkinkan.",
                    "publish_date": "2021-08-19T16:22:02Z",
                    "diagonsis": [
                        "tekanan darah yang rendah",
                        "denyut nadi yang cepat",
                    ],
                    "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                    "short_desc": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk.",
                    "title": "Dehidrasi_Ringan",
                    "obat": [
                        "air",
                        "rehidrasi_oral"
                    ],
                    "symptom": "haus,minum",
                    "reviewed": "",
                    "reviewer_name": "Tim Apoteker Klikdokter"
                }
            },
        ]
    }
    ```
</details>

## GET Disease Detail
`/disease/{id?}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "id": "KxM90deQQwDOQq3ozxln",
        "data": {
            "data": {
                "diagonsis": [
                    "Rata-rata suhu oral normal adalah 37 derajat Celsius.",
                    "Suhu rektal dan telinga lebih tinggi 0,3–0,6 derajat Celsius daripada suhu oral.",
                    "Suhu ketiak dan dahi biasanya lebih rendah 0,3–0,6 derajat Celsius daripada suhu oral.",
                ],
                "short_desc": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan dan cara mengobati demam di sini.",
                "reviewed": "dr. Muhammad Iqbal Ramadhan",
                "medication": "Menjaga kecukupan cairan tubuh, batasi aktivitas, istirahat yang cukup, usahakan suhu ruangan tetap sejuk, kompres atau mandi air hangat, obat penurun panas",
                "about": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan cara mengobati demam di sini. Orang dewasa dianggap dari infeksi yang serius.",
                "categories": [
                    "kesehatan_umum"
                ],
                "publish_date": "2022-04-18T11:33:29Z",
                "obat": [
                    "Paracetamol",
                    "ibuprofen"
                ],
                "title": "Demam",
                "symptom": [
                    "berkeringat",
                    "menggigil",
                    "nyeri_sendi",
                    "nyeri_otot",
                    "sakit_kepala",
                    "nafsu_makan_hilang",
                    "lemas",
                    "dehidrasi",
                    "rewel_atau_gelisah_pada_anak"
                ]
            }
        }
    }
    ```
</details>

## PUT Disease Update
`/disease/{id}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "message": "Penyakit berhasil diperbaharui",
        "data": {
            "diagonsis": [
                "Rata-rata suhu oral normal adalah 37 derajat Celsius.",
                "Suhu rektal dan telinga lebih tinggi 0,3–0,6 derajat Celsius daripada suhu oral."
            ],
            "publish_date": "2022-11-25T13:59:28.196Z",
            "title": "Demam",
            "medication": "Menjaga kecukupan cairan tubuh, batasi aktivitas, istirahat yang cukup,
            "reviewed": "dr. Muhammad Iqbal Ramadhan",
            "symptom": [
                "berkeringat",
                "menggigil",
                "nyeri_sendi",
            ],
            "categories": [
                "kesehatan_umum"
            ],
            "about": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. 
            "short_desc": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan dan cara mengobati demam di sini.",
            "obat": [
                "Paracetamol",
                "ibuprofen"
            ]
        }
    }
    ```
</details>

## DELETE Disease DELETE
`/disease/{id}`

<details>
    <summary>[ Response ]</summary>

    ## Response

    ```
    {
        "status": "success",
        "message": "obat berhasil dihapus"
    }
    ```
</details>