# SiAPI
> SiAPI adalah API untuk menyimpan data-data kesehatan <br> berupa jenis obat-obatan, jenis penyakit, dan menemukan penyakit berdasarkan gejala

## Endpoint 
[https://api-si-sehat.vercel.app](https://api-si-sehat.vercel.app)

## Status Code 
- 100-199     : informational responses.
- 200 - 299   : successful responses. [200] Success
- 300-399     : redirect.
- 400-499     : client error. [400] Bad Request, [404] Not Found
- 500-599     : server errors.

## Temukan penyakit berdasarkan gejala
* URL
    * `/sympthom`
* Method
    * `POST`

* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    {
        "symptoms": [ "lemas" ]
    }
    ```
    </details>

* Response
```JSON
{
    "status": "success",
    "id": "SXESjUVoxmfKXCznnDuj",
    "data": {
        "title": "Demam",
        "publish_date": "2021-08-19T16:22:02Z",
        "symptom": [
            "berkeringat",
            "menggigil",
            "nyeri_sendi",
            "nyeri_otot",
            "sakit kepala",
            "nafsu makan hilang",
            "lemas",
            "dehidrasi",
            "rewel atau gelisah pada anak",
            "lemas"
        ],
        "short_desc": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian.",
        "obat": [
            "air",
            "rehidrasi_oral"
        ],
        "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
        "medication": "Menjaga kecukupan cairan tubuh, batasi aktivitas, istirahat yang cukup, usahakan suhu ruangan tetap sejuk, kompres atau mandi air hangat, obat penurun panas.",
        "about": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan dan cara mengobati demam di sini.",
        "reviewer_name": "dr. Muhammad Iqbal Ramadhan",
        "diagonsis": [
            "Rata-rata suhu oral normal adalah 37 derajat Celsius",
            "Suhu rektal dan telinga lebih tinggi 0,3–0,6 derajat Celsius daripada suhu oral."
        ],
        "categories": "kesehatan_umum"
    }
}
```

## Temukan obat
* URL
    * `/medicine`
* Method
    * `POST`

* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    {
        "medicines": [ "paracetamol" ]
    }
    ```
    </details>

* Response
```JSON
{
    "status": "success",
    "data": [
        {
            "about": "Flu yang disebabkan virus influenza ini memang sangat mudah menular.",
            "publish_date": "2022-11-30T03:54:37.494Z",
            "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
            "kegunaan": "Manfaat Paramex Flu dan Batuk adalah untuk mengatasi gejala flu.",
            "short_desc": "Siapa yang tahan dengan gejala batuk dan flu? Segera atasi dengan obat yang tepat! Salah satunya Paramex Flu dan Batuk. Ini kandungannya.",
            "warning": [
                "Pseudoephedrine yang ada di dalam Paramex Flu dan Batuk termasuk dalam obat kategori C. Artinya, studi pada binatang percobaan memperlihatkan adanya efek samping terhadap janin, meski belum ada studi terkontrol pada ibu hamil.",
            ],
            "reviewer_name": "Apt. Evita Fitriani., S. Farm",
            "categories": "obat-demam",
            "Disease-Related": [
                "nyeri",
                "demam"
            ],
            "title": "paramex flu dan batuk",
            "rules": [
                "Cara Penggunaan Paramex Flu dan Batuk untuk orang dewasa adalah 1 tablet diminum 3 kali sehari dan pada anak-anak 6-12 tahun diminum ½ tablet 3 kali sehari."
            ]
        }
    ]
}
```

## Admin
### Register
* URL
    * `/register`
* Method
    * `POST`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    {
        "username": "udin_pratama",
        "email": "udin@gmail.com",
        "password": "udin_123"
    }
    ```
    </details>
* Response
```JSON
    {
        "status": "success",
        "message": "berhasil menambahkan user",
        "data": {
            "id": "13FwjMjkua3FNB6dnsec",
            "data": {
                "username": "udin_pratama",
                "email": "udin@gmail.com",
                "password": "udin_123"
            }
        }
    }
```

### Login
* URL
    * `/login`
* Method
    * `POST`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    {
        "email": "udin121@gmail.com",
        "password": "udin_123"
    }
    ```
    </details>

* Response
```JSON
    {
        "status": "success",
        "message": "user ditemukan",
        "data": {
            "username": "udin_pratama",
            "password": "udin_123",
            "email": "udin@gmail.com"
        }
    }
```

## Obat
### POST Obat
* URL
    * `/drug`
* Method
    * `POST`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    {
        "title": "Paramex Flu dan Batuk",
        "short_desc": "Siapa yang tahan dengan gejala batuk dan flu? Segera atasi dengan obat yang tepat! Salah satunya Paramex Flu dan Batuk. Ini kandungannya.",
        "publish_date": "2021-12-01T11:44:47Z",
        "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
        "reviewer_name": "Apt. Evita Fitriani., S. Farm",
        "categories": "obat-demam",
        "about": "Flu yang disebabkan virus influenza ini memang sangat mudah menular.",
        "kegunaan": "Manfaat Paramex Flu dan Batuk adalah untuk mengatasi gejala flu, seperti hidung tersumbat, demam, dan sakit kepala yang disertai dengan batuk kering.",
        "rules": [
            "Cara Penggunaan Paramex Flu dan Batuk untuk orang dewasa adalah 1 tablet."
        ],
        "warning": [
            "Pseudoephedrine yang ada di dalam Paramex Flu dan Batuk termasuk dalam obat kategori C. Artinya, studi pada binatang percobaan memperlihatkan adanya efek samping terhadap janin, meski belum ada studi terkontrol pada ibu hamil.",
        ],
        "Disease-Related": [
            "nyeri",
            "demam"
        ]
    }
    ```
    </details>

* Response
```JSON
    {
        "status": "success",
        "message": "Obat berhasil ditambahkan",
        "data": {
            "id": "4NwNUnnqBL5Q5gR5TTtY",
            "data": {
                "title": "Paramex Flu dan Batuk",
                "short_desc": "Siapa yang tahan dengan gejala batuk dan flu? Segera atasi dengan obat yang tepat! Salah satunya Paramex Flu dan Batuk. Ini kandungannya.",
                "publish_date": "2021-12-01T11:44:47Z",
                "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                "reviewer_name": "Apt. Evita Fitriani., S. Farm",
                "categories": "obat-demam",
                "about": "Flu yang disebabkan virus influenza ini memang sangat mudah menular.",
                "kegunaan": "Manfaat Paramex Flu dan Batuk adalah untuk mengatasi gejala flu, seperti hidung tersumbat, demam, dan sakit kepala yang disertai dengan batuk kering.",
                "rules": [
                    "Cara Penggunaan Paramex Flu dan Batuk untuk orang dewasa adalah 1 tablet."
                ],
                "warning": [
                    "Pseudoephedrine yang ada di dalam Paramex Flu dan Batuk termasuk dalam obat kategori C. Artinya, studi pada binatang percobaan memperlihatkan adanya efek samping terhadap janin, meski belum ada studi terkontrol pada ibu hamil.",
                ],
                "Disease-Related": [
                    "nyeri",
                    "demam"
                ]
            }
        }
    }
```

### GET Detail Obat
* URL
    * `/drug/{id?}`
* Method
    * `GET`
* Response
```JSON
    {
        "status": "success",
        "id": "nfvFxxkDBFpKjRdfCO2k",
        "data": {
            "publish_date": "2021-12-01T11:44:47Z",
            "about": "desc obat",
            "rules": [
                "rulesObat"
            ],
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
                "Sebaiknya tidak mengonsumsi Paramex Flu dan Batuk jika Anda sedang melakukan aktivitas yang butuh kewaspadaan, seperti mengemudi."
            ],
            "reviewer_name": "Reviewer Name"
        }
    }
```

### GET All Obat
* URL
    * `/drug`
* Method
    * `GET`
* Response
```JSON
    {
        "status": "success",
        "datasDrug": [
            {
                "id": "uDB1r4aCqi1Aec2H4Ugp",
                "data": {
                    "short_desc": "Paracetamol adalah obat untuk menurunkan demam serta meredakan nyeri ringan hingga sedang.",
                    "about": "Demam merupakan salah satu gejala yang muncul ketika ada infeksi di dalam tubuh.",
                    "warning": [
                        "Konsumsi alkohol bersama Paracetamol dapat meningkatkan risiko kerusakan hati",
                        "Sebaiknya konsultasikan dengan dokter sebelum bumil mengonsumsi Paracetamol."
                    ],
                    "kegunaan": "Manfaat Paracetamol adalah untuk meredakan nyeri ringan hingga sedang. Selain itu, fungsi Paracetamol adalah sebagai penurun demam.",
                    "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                    "publish_date": "2022-04-06T13:59:15Z",
                    "rules": [
                        "Anak 9-12 tahun: 3-4 sendok takar (15-20 ml), 3-4 kali per hari",
                        "Anak di bawah 1 tahun: ½ sendok takar (2.5 ml), 3-4 kali per hari"
                    ],
                    "title": "Paracetamol",
                    "categories": "obat-demam",
                    "disease_related": [
                        "nyeri",
                        "demam"
                    ],
                    "reviewer_name": "Tim Apoteker Klikdokter"
                }
            },
            {
                "id": "uDB1r4aCqi1Aec2H4Ugp",
                "data": {
                    "title": "Paracetamol",
                    "about": "Demam merupakan salah satu gejala yang muncul ketika ada infeksi di dalam tubuh. Respons ini muncul ketika tubuh bereaksi dalam melawan kuman.",
                    "reviewer_name": "Tim Apoteker Klikdokter",
                    "categories": "obat-demam",
                    "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                    "warning": [
                        "Mengonsumsi Paracetamol yang melebihi dosis dapat menyebabkan kerusakan",
                        "Beritahu dokter jika Anda memiliki riwayat penyakit hati dan gangguan ginjal"
                    ],
                    "rules": [
                        "Anak 9-12 tahun: 3-4 sendok takar (15-20 ml), 3-4 kali per hari",
                        "Anak 6-9 tahun: 2-3 sendok takar (10-15 ml), 3-4 kali per hari"
                    ],
                    "disease_related": [
                        "nyeri",
                        "demam"
                    ],
                    "short_desc": "Paracetamol adalah obat untuk menurunkan demam serta meredakan nyeri ringan hingga sedang.",
                    "kegunaan": "Manfaat Paracetamol adalah untuk meredakan nyeri ringan hingga sedang. Selain itu, fungsi Paracetamol adalah sebagai penurun demam.",
                    "publish_date": "2022-04-06T13:59:15Z"
                }
            }
        ]
    }
```

### UPDATE Obat
* URL
    * `/drug/{id}`
* Method
    * `PUT`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    // isikan apa yg ingin diupdate
    {
        "reviewer_name": "Udin Pratama"
    }
    ```
    </details>
* Response
```JSON
    {
        "status": "success",
        "message": "Obat berhasil diperbaharui",
        "data": {
            "reviewer_name": "Udin Pratama",
            "kegunaan": "Manfaat Paracetamol adalah untuk meredakan nyeri ringan hingga sedang. Selain itu, fungsi Paracetamol adalah sebagai penurun demam.",
            "Disease-Related": [
                "nyeri",
                "demam"
            ],
            "rules": [
                "Anak 9-12 tahun: 3-4 sendok takar (15-20 ml), 3-4 kali per hari",
                "Anak 6-9 tahun: 2-3 sendok takar (10-15 ml), 3-4 kali per hari"
            ],
            "publish_date": "2022-11-25T13:45:03.364Z",
            "title": "Paracetamol",
            "about": "Demam merupakan salah satu gejala yang muncul ketika ada infeksi di dalam dari sakit tersebut",
            "short_desc": "Paracetamol adalah obat untuk menurunkan demam serta meredakan nyeri ringan hingga sedang.",
            "categories": "obat-demam",
            "warning": [
                "Mengonsumsi Paracetamol yang melebihi dosis dapat menyebabkan kerusakan hati",
                "Paracetamol dapat masuk ke dalam ASI. Namun, Paracetamol masih aman untuk dikonsumsi ibu menyusui."
            ],
            "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg"
        }
    }
```

### DELETE Obat
* URL
    * `/drug/{id}`
* Method
    * `DELETE`
* Response
```JSON
    
    {
        "status": "success",
        "message": "obat berhasil dihapus"
    }
```

## Penyakit
### POST Add Disease
* URL
    * `/disease`
* Method
    * `POST`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    // isikan apa yg ingin diupdate
    {
        "title": "Dehiderasi",
        "short_desc": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk.",
        "publish_date": "2021-08-19T16:22:02Z",
        "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
        "reviewer_name": "Tim Apoteker",
        "categories": "kesehatan_umum",
        "about": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih.",
        "obat": [
            "air",
            "rehidrasi_oral"
        ],
        "medication": "Pada kondisi dehidrasi ringan-sedang di mana asupan makanan dan minuman masih baik.",
        "symptom": [
            "haus", 
            "lemas"
        ],
        "diagonsis": [
            "tekanan darah yang rendah",
            "denyut nadi yang cepat"
        ],
        "reviewed": ""
    }
    ```
    </details>
* Response
```JSON
    {
        "status": "success",
        "message": "Penyakit berhasil ditambahkan",
        "data": {
            "id": "RL7RKZThJ1MW7jRraG1T",
            "data": {
                "title": "Dehiderasi",
                "short_desc": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih banyak dari jumlah cairan yang masuk.",
                "publish_date": "2021-08-19T16:22:02Z",
                "thumbnail_url": "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/oObI0281aEzIFy4nkleeC/original/002458100_1601968935-Seorang-Wanita-Mengalami-Gejala-Demam-Berdarah-shutterstock_1487854622.jpg",
                "reviewer_name": "Tim Apoteker",
                "categories": "kesehatan_umum",
                "about": "Dehidrasi merupakan kondisi jumlah cairan yang keluar dari tubuh lebih.",
                "obat": [
                    "air",
                    "rehidrasi_oral"
                ],
                "medication": "Pada kondisi dehidrasi ringan-sedang di mana asupan makanan dan minuman masih baik.",
                "symptom": [
                    "haus", 
                    "lemas"
                ],
                "diagonsis": [
                    "tekanan darah yang rendah",
                    "denyut nadi yang cepat"
                ],
                "reviewed": ""
            }
        }
    }
```

### GET All Disease
* URL
    * `/disease`
* Method
    * `GET`
* Response
```JSON
    {
        "status": "success",
        "datasDisease": [
            {
                "id": "0uMSJqMnfkBnYffjNsxQ",
                "data": {
                    "symptom": [
                        "haus_berlebihan",
                        "berkeringat",
                        "lemas"
                    ],
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
                    "symptom": [
                        "haus",
                        "lemas"
                    ],
                    "reviewed": "",
                    "reviewer_name": "Tim Apoteker Klikdokter"
                }
            },
        ]
    }
```

### GET Detail Disease 
* URL
    * `/disease/{id}`
* Method
    * `GET`
* Response
```JSON
    {
        "status": "success",
        "id": "KxM90deQQwDOQq3ozxln",
        "data": {
            "diagonsis": [
                "Rata-rata suhu oral normal adalah 37 derajat Celsius.",
                "Suhu rektal dan telinga lebih tinggi 0,3–0,6 derajat Celsius daripada suhu oral.",
                "Suhu ketiak dan dahi biasanya lebih rendah 0,3–0,6 derajat Celsius daripada suhu oral.",
            ],
            "short_desc": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan dan cara mengobati demam di sini.",
            "reviewed": "dr. Muhammad Iqbal Ramadhan",
            "medication": "Menjaga kecukupan cairan tubuh, batasi aktivitas, istirahat yang cukup, usahakan suhu ruangan tetap sejuk, kompres atau mandi air hangat, obat penurun panas",
            "about": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab.",
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
```

### UPDATE Disease
* URL
    * `/disease/{id}`
* Method
    * `GET`
* Request
    * 
    <details>
    <summary>Example Request [Show / Hide]</summary>

    ```JSON
    // isikan apa yg ingin diupdate
    {
        "categories": "kesehatan_umum"
    }
    ```
    </details>
* Response
```JSON
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
            "medication": "Menjaga kecukupan cairan tubuh, batasi aktivitas, istirahat yang cukup,"
            "reviewed": "dr. Muhammad Iqbal Ramadhan",
            "symptom": [
                "berkeringat",
                "menggigil",
                "nyeri_sendi",
            ],
            "categories": "kesehatan_umum",
            "about": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian."
            "short_desc": "Demam adalah kondisi meningkatnya suhu tubuh di atas rata-rata suhu harian. Ketahui penyebab, gejala, dan dan cara mengobati demam di sini.",
            "obat": [
                "Paracetamol",
                "ibuprofen"
            ]
        }
    }
```

### DELETE Disease
* URL
    * `/disease/{id}`
* Method
    * `DELETE`
* Response
```JSON
    {
        "status": "success",
        "message": "obat berhasil dihapus"
    }
```
