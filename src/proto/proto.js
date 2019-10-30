/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  MSS: {
    nested: {
      MATERIAL: {
        nested: {
          LoginRequest: {
            fields: {
              userName: {
                type: "string",
                id: 1
              },
              password: {
                type: "string",
                id: 2
              }
            }
          },
          LoginReply: {
            fields: {
              success: {
                type: "int32",
                id: 1
              }
            }
          },
          LocationInfo: {
            fields: {
              locationId: {
                type: "int32",
                id: 1
              },
              location: {
                type: "string",
                id: 2
              }
            }
          },
          LocationRelationshipInfo: {
            fields: {
              locationId: {
                type: "int32",
                id: 1
              },
              equipmentTypeId: {
                rule: "repeated",
                type: "string",
                id: 2
              }
            }
          },
          MaterialTypeInfo: {
            fields: {
              materialTypeId: {
                type: "string",
                id: 1
              },
              materialType: {
                type: "string",
                id: 2
              }
            }
          },
          EquipmentTypeInfo: {
            fields: {
              equipmentTypeId: {
                type: "string",
                id: 1
              },
              equipmentType: {
                type: "string",
                id: 2
              }
            }
          },
          ConcreteTypeInfo: {
            fields: {
              concreteTypeId: {
                type: "string",
                id: 1
              },
              concreteType: {
                type: "string",
                id: 2
              }
            }
          },
          ConcreteNameInfo: {
            fields: {
              concreteNameId: {
                type: "string",
                id: 1
              },
              concreteName: {
                type: "string",
                id: 2
              }
            }
          },
          ManufacturerInfo: {
            fields: {
              manufacturerId: {
                type: "int32",
                id: 1
              },
              manufacturer: {
                type: "string",
                id: 2
              }
            }
          },
          AssembleFactoryInfo: {
            fields: {
              assembleFactoryId: {
                type: "int32",
                id: 1
              },
              assembleFactory: {
                type: "string",
                id: 2
              }
            }
          },
          MaterialRelationshipInfo: {
            fields: {
              materialTypeId: {
                type: "string",
                id: 1
              },
              equipmentTypeId: {
                type: "string",
                id: 2
              },
              concreteTypeId: {
                type: "string",
                id: 3
              },
              concreteNameId: {
                type: "string",
                id: 4
              },
              manufacturerId: {
                type: "int32",
                id: 5
              },
              assembleFactoryId: {
                type: "int32",
                id: 6
              }
            }
          },
          MaterialPropertyInfo: {
            fields: {
              materialPropertyId: {
                type: "int32",
                id: 1
              },
              materialProperty: {
                type: "string",
                id: 2
              }
            }
          },
          UseStatusInfo: {
            fields: {
              useStatusId: {
                type: "int32",
                id: 1
              },
              useStatus: {
                type: "string",
                id: 2
              }
            }
          },
          ActivedStatusInfo: {
            fields: {
              activedStatusId: {
                type: "int32",
                id: 1
              },
              activedStatus: {
                type: "string",
                id: 2
              }
            }
          },
          AssetSpecificityInfo: {
            fields: {
              assetSpecificityId: {
                type: "int32",
                id: 1
              },
              assetSpecificity: {
                type: "string",
                id: 2
              }
            }
          },
          ImportanceLevelInfo: {
            fields: {
              importanceLevelId: {
                type: "int32",
                id: 1
              },
              importanceLevel: {
                type: "string",
                id: 2
              }
            }
          },
          ChangeTypeInfo: {
            fields: {
              changeTypeId: {
                type: "int32",
                id: 1
              },
              changeType: {
                type: "string",
                id: 2
              }
            }
          },
          ConcreteChangeTypeInfo: {
            fields: {
              concreteChangeTypeId: {
                type: "int32",
                id: 1
              },
              concreteChangeType: {
                type: "string",
                id: 2
              }
            }
          },
          ChangeRelationshipInfo: {
            fields: {
              changeTypeId: {
                type: "int32",
                id: 1
              },
              concreteChangeTypeId: {
                type: "int32",
                id: 2
              }
            }
          },
          MaterialStaticInfo: {
            fields: {
              serialNo: {
                type: "int32",
                id: 1
              },
              materialBatchNo: {
                type: "string",
                id: 2
              },
              materialSerialNo: {
                type: "string",
                id: 3
              },
              concreteNameId: {
                type: "string",
                id: 4
              },
              memo: {
                type: "string",
                id: 5
              },
              manufacturerId: {
                type: "int32",
                id: 6
              },
              assembleFactoryId: {
                type: "int32",
                id: 7
              },
              materialPropertyId: {
                type: "int32",
                id: 8
              },
              executor: {
                type: "string",
                id: 9
              },
              materialOtherNo: {
                type: "string",
                id: 10
              },
              IMTE: {
                type: "string",
                id: 11
              },
              importanceLevelId: {
                type: "int32",
                id: 12
              },
              assetSpecificityId: {
                type: "int32",
                id: 13
              },
              productionTime: {
                type: "int32",
                id: 14
              },
              unitPrice: {
                type: "float",
                id: 15
              },
              unit: {
                type: "string",
                id: 16
              },
              useTime: {
                type: "int32",
                id: 17
              },
              depreciation: {
                type: "float",
                id: 18
              }
            }
          },
          MaterialDynamicInfo: {
            fields: {
              serialNo: {
                type: "int32",
                id: 1
              },
              materialBatchNo: {
                type: "string",
                id: 2
              },
              materialSerialNo: {
                type: "string",
                id: 3
              },
              concreteNameId: {
                type: "string",
                id: 4
              },
              memo: {
                type: "string",
                id: 5
              },
              workGang: {
                type: "string",
                id: 6
              },
              totalNumber: {
                type: "int32",
                id: 7
              },
              useStatusId: {
                type: "int32",
                id: 8
              },
              activedStatusId: {
                type: "int32",
                id: 9
              },
              operateTime: {
                type: "int32",
                id: 10
              },
              ownershipLocationId: {
                type: "int32",
                id: 11
              },
              currentLocationId: {
                type: "int32",
                id: 12
              },
              detailSavePlace: {
                type: "string",
                id: 13
              },
              currentChangeStatus: {
                type: "int32",
                id: 14
              }
            }
          },
          MaterialStaticInfosRequest: {
            fields: {
              lineId: {
                type: "string",
                id: 1
              }
            }
          },
          MaterialStaticInfosReply: {
            fields: {
              locationInfos: {
                rule: "repeated",
                type: "LocationInfo",
                id: 1
              },
              locationRelationshipInfos: {
                rule: "repeated",
                type: "LocationRelationshipInfo",
                id: 2
              },
              materialTypeInfos: {
                rule: "repeated",
                type: "MaterialTypeInfo",
                id: 3
              },
              equipmentTypeInfos: {
                rule: "repeated",
                type: "EquipmentTypeInfo",
                id: 4
              },
              concreteTypeInfos: {
                rule: "repeated",
                type: "ConcreteTypeInfo",
                id: 5
              },
              concreteNameInfos: {
                rule: "repeated",
                type: "ConcreteNameInfo",
                id: 6
              },
              manufacturerInfos: {
                rule: "repeated",
                type: "ManufacturerInfo",
                id: 7
              },
              assembleFactoryInfos: {
                rule: "repeated",
                type: "AssembleFactoryInfo",
                id: 8
              },
              materialRelationshipInfos: {
                rule: "repeated",
                type: "MaterialRelationshipInfo",
                id: 9
              },
              materialPropertyInfos: {
                rule: "repeated",
                type: "MaterialPropertyInfo",
                id: 10
              },
              useStatusInfos: {
                rule: "repeated",
                type: "UseStatusInfo",
                id: 11
              },
              activedStatusInfos: {
                rule: "repeated",
                type: "ActivedStatusInfo",
                id: 12
              },
              assetSpecificityInfos: {
                rule: "repeated",
                type: "AssetSpecificityInfo",
                id: 13
              },
              importanceLevelInfos: {
                rule: "repeated",
                type: "ImportanceLevelInfo",
                id: 14
              },
              changeTypeInfos: {
                rule: "repeated",
                type: "ChangeTypeInfo",
                id: 15
              },
              concreteChangeTypeInfos: {
                rule: "repeated",
                type: "ConcreteChangeTypeInfo",
                id: 16
              },
              changeRelationshipInfos: {
                rule: "repeated",
                type: "ChangeRelationshipInfo",
                id: 17
              }
            }
          },
          InputTypeListRequest: {
            fields: {
              locationId: {
                type: "string",
                id: 1
              }
            }
          },
          currentEquipmentList: {
            fields: {
              materialTypeId: {
                type: "string",
                id: 1
              },
              materialType: {
                type: "string",
                id: 2
              },
              equipmentTypeId: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              equipmentType: {
                rule: "repeated",
                type: "string",
                id: 4
              }
            }
          },
          InputTypeListReply: {
            fields: {
              typeInfos: {
                rule: "repeated",
                type: "currentEquipmentList",
                id: 1
              }
            }
          },
          AddMaterialConcreteTypeListRequest: {
            fields: {
              locationId: {
                type: "string",
                id: 1
              },
              equipmentId: {
                type: "string",
                id: 2
              }
            }
          },
          AddMaterialConcreteTypeListReply: {
            fields: {
              concreteTypeInfos: {
                rule: "repeated",
                type: "ConcreteTypeInfo",
                id: 1
              }
            }
          },
          AddMaterialConcreteNameListRequest: {
            fields: {
              concreteType: {
                type: "string",
                id: 1
              }
            }
          },
          AddMaterialConcreteNameListReply: {
            fields: {
              concreteNameInfos: {
                rule: "repeated",
                type: "ConcreteNameInfo",
                id: 1
              }
            }
          },
          AddMaterialVenderInfosRequest: {
            fields: {
              concreteName: {
                type: "string",
                id: 1
              }
            }
          },
          AddMaterialVenderInfosReply: {
            fields: {
              manufacturerInfos: {
                rule: "repeated",
                type: "ManufacturerInfo",
                id: 1
              },
              assembleFactoryInfos: {
                rule: "repeated",
                type: "AssembleFactoryInfo",
                id: 2
              }
            }
          },
          AddMaterialRequest: {
            fields: {
              concreteNameId: {
                type: "string",
                id: 1
              },
              memo: {
                type: "string",
                id: 2
              },
              manufacturerId: {
                type: "int32",
                id: 3
              },
              assembleFactoryId: {
                type: "int32",
                id: 4
              },
              materialPropertyId: {
                type: "int32",
                id: 5
              },
              executor: {
                type: "string",
                id: 6
              },
              materialOtherNo: {
                type: "string",
                id: 7
              },
              IMTE: {
                type: "string",
                id: 8
              },
              importanceLevelId: {
                type: "int32",
                id: 9
              },
              assetSpecificityId: {
                type: "int32",
                id: 10
              },
              productionTime: {
                type: "int32",
                id: 11
              },
              unitPrice: {
                type: "float",
                id: 12
              },
              unit: {
                type: "string",
                id: 13
              },
              useTime: {
                type: "int32",
                id: 14
              },
              depreciation: {
                type: "float",
                id: 15
              },
              workGang: {
                type: "string",
                id: 16
              },
              totalNumber: {
                type: "int32",
                id: 17
              },
              useStatusId: {
                type: "int32",
                id: 18
              },
              ownershipLocationId: {
                type: "int32",
                id: 19
              },
              currentLocationId: {
                type: "int32",
                id: 20
              },
              detailSavePlace: {
                type: "string",
                id: 21
              }
            }
          },
          AddMaterialReply: {
            fields: {
              success: {
                type: "int32",
                id: 1
              },
              dynamicInfo: {
                rule: "repeated",
                type: "MaterialDynamicInfo",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
