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
*`/drug/{id?}`*

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

