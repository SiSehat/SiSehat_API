# SiAPI
## RestAPI
`https://api-si-sehat.vercel.app` 

## Status Code 
- 100-199     : informational responses.
- 200 - 299   : successful responses. [200] Success
- 300-399     : redirect.
- 400-499     : client error. [400] Bad Request, [404] Not Found
- 500-599     : server errors.

# Endpoint

## POST Obat
[ Response ]
```JSON

```
## GET Detail Obat
*`/drug/{id?}`*

[ Response ] 
<details>
    <summary>Response</summary>
    ```JSON
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