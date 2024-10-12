{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "serverfarms_ASP_Teknik24Kaynak_8a11_name": {
            "defaultValue": "ASP-Teknik24Kaynak-8a11",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Web/serverfarms",
            "apiVersion": "2023-12-01",
            "name": "[parameters('serverfarms_ASP_Teknik24Kaynak_8a11_name')]",
            "location": "North Europe",
            "tags": {
                "ms-resource-usage": "azure-cloud-shell"
            },
            "sku": {
                "name": "P0v3",
                "tier": "Premium0V3",
                "size": "P0v3",
                "family": "Pv3",
                "capacity": 1
            },
            "kind": "linux",
            "properties": {
                "perSiteScaling": false,
                "elasticScaleEnabled": false,
                "maximumElasticWorkerCount": 1,
                "isSpot": false,
                "reserved": true,
                "isXenon": false,
                "hyperV": false,
                "targetWorkerCount": 0,
                "targetWorkerSizeId": 0,
                "zoneRedundant": false
            }
        }
    ]
}
