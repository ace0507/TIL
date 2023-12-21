import React, { useState, useEffect } from "react";
import {
  Datagrid,
  DateField,
  FileField,
  ImageField,
  ListActionToolbar,
  Pagination,
  Section,
  SubContentActionsBase,
  SubContentListBase,
  TextField,
  useContentContext,
} from "@components";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import {
  RecordContextProvider,
  useListContext,
  useLocaleState,
  useRecordContext,
  useRedirect,
} from "ra-core";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import { RenderSubFileContentActions } from "../../actions/sub-content/RenderSubFileContentActions";
import { useLocation } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Lightbox from "react-image-lightbox";

interface Props {
  onSelect?: any;
}

export const SubContentFileListSection = (props: Props) => {
  const record = useRecordContext();
  const theme = useTheme();
  const [locale] = useLocaleState();
  const redirect = useRedirect();
  const [viewMode, setViewMode] = useState("list");

  //페이지 전환
  const { otherProps } = useContentContext();
  const location = useLocation();
  const isShowPage = location.pathname.endsWith("/show");

  const contextValue = React.useMemo(
    () => ({
      resource: "services/obpcontent/api/content-assocs",
      perPage: 100000,
      sort: { field: "id", order: "ASC" },
      filter: {
        // 'ancestor.contentId': { operator: 'eq', value: record.id },
        contentId: { operator: "eq", value: record.id },
        contentAssocType: { operator: "eq", value: "SUB_CONTENT" },
      },
      disableSyncWithLocation: true,
    }),
    [record]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // 이미지 클릭 시 라이트박스 열기
  const handleImageClick = () => {
    setSelectedImage(undefined);
    setIsOpen(true);
  };

  // 라이트박스 닫기
  const closeLightbox = () => {
    setSelectedImage("");
    setIsOpen(false);
  };

  const Icon = () => {
    const record = useRecordContext();
    const contentPurposes = record?.contentTo?.contentPurposes || [];
    const subContentPurpose = contentPurposes.find(
      (item) => item.contentPurposeTypeId === "SUB_CONTENT"
    );
    const isUse = subContentPurpose?.isUse;

    if (isUse) {
      return (
        <FolderSharpIcon
          sx={{
            fontSize: "1.5rem",
            color: "skyBlue",
          }}
        />
      );
    } else {
      return (
        <ArticleOutlinedIcon
          sx={{
            fontSize: "1.5rem",
            color: "skyBlue",
          }}
        />

        // <GetFileIcon />
      );
    }
  };

  //컴포넌트 분리
  const ListView = ({ onSelect }: Props) => {
    console.log("onSelect", onSelect);
    //TODO
    function getfileSize(x) {
      var s = ["bytes", "kB", "MB", "GB", "TB", "PB"];
      var e = Math.floor(Math.log(x) / Math.log(1024));
      return (x / Math.pow(1024, e)).toFixed(2) + " " + s[e];
    }
    return (
      <Stack
        sx={{
          width: "100%",
          padding: theme.spacing(0),
          justifyContent: "center",
        }}
      >
        <Datagrid
          rowClick={onSelect}
          bulkActionButtons={false}
          sx={{
            paddingTop: "2rem",
            "& .MuiTableCell-root": {
              padding: "3px",
            },
            "& .column-comment": {
              backgroundColor: "pink",
            },
          }}
        >
          <Icon />

          <TextField
            sx={{
              paddingTop: "2rem",
              "& .MuiTypography-root": {
                color: "pink",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            }}
            label="파일이름"
            source={`contentTo.contentName.${locale}`}
          />
          <TextField
            label="크기"
            source={`contentTo.contentAttributes[0].attrValue[0].length`}
          />
          <TextField
            label="파일형식"
            source={`contentTo.contentAttributes[0].attrValue[0].metadata.contentType`}
          />
          <DateField source="lastModifiedDate" showTime />
          <ListActionToolbar></ListActionToolbar>
        </Datagrid>
        <Pagination />
      </Stack>
    );
  };

  // 파일 유형에 따른 아이콘 구분 함수
  const GetFileIcon = () => {
    const record = useRecordContext();
    console.log("recordContentType:", record);
    const contentType =
      record.contentTo.contentAttributes[0]?.attrValue?.[0]?.metadata
        ?.contentType;
    if (contentType) {
      // contentType 값이 존재할 때 실행하는 로직
      console.log("ContentType:", contentType);
    } else {
      // contentType 값이 없을 때 실행하는 로직
      console.log("ContentType is not available.");
    }
    //아이디 뽑아오기
    const FileId = record.contentTo.contentAttributes[0]?.attrValue?.[0]?.id;

    //이미지일때
    if (contentType === "image/png") {
      return (
        <>
          <Typography>image</Typography>

          <ImageField
            source={`contentTo.contentName.${locale}`}
            title="title"
          />
        </>
      );
      //동영상일때
    } else if (contentType) {
      return (
        <ArticleOutlinedIcon
          sx={{
            fontSize: "4rem",
            color: "skyBlue",
            flexDirection: "row",
            "& .MuiStack-root": {
              width: "20px",
            },
          }}
        />
      );
      //애플리케이션일때
    } else if (contentType) {
      return (
        <ArticleOutlinedIcon
          sx={{
            fontSize: "4rem",
            color: "skyBlue",
            flexDirection: "row",
            "& .MuiStack-root": {
              width: "20px",
            },
          }}
        />
      );
    } else {
      return (
        <ArticleOutlinedIcon
          onClick={() => handleImageClick()}
          sx={{
            fontSize: "4rem",
            color: "skyBlue",
            flexDirection: "row",
            "& .MuiStack-root": {
              width: "20px",
            },
          }}
        />
      );
    }
  };

  const FolderFileView = ({ onSelect }: Props) => {
    const { data: assocData } = useListContext();
    if (!assocData || assocData.length === 0) {
      return null;
    }

    return (
      <Grid container spacing={0} sx={{ marginTop: "2rem" }}>
        {assocData.map((item) => {
          const contentPurposes = item?.contentTo?.contentPurposes || [];
          const subContentPurpose = contentPurposes.find(
            (item) => item.contentPurposeTypeId === "SUB_CONTENT"
          );
          console.log("assocData", assocData);
          if (subContentPurpose?.isUse) {
            const contentName = item?.contentTo?.contentName[locale];
            console.log("contentName", contentName);
            return (
              <Grid item xs={6} sm={4} md={3} lg={3} key={item.id}>
                <RecordContextProvider value={item} key={item.id}>
                  <Stack
                    onClick={() => onSelect(item)}
                    sx={{
                      width: "100%",
                      padding: theme.spacing(0),
                      justifyContent: "center",
                      "& .MuiStack-root": {
                        backgroundColor: "pink",
                      },
                    }}
                  >
                    <FolderSharpIcon
                      sx={{
                        fontSize: "4rem",
                        color: "skyBlue",
                      }}
                    />
                    <img
                      key={item.id}
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      onClick={() => handleImageClick()}
                    />
                    <TextField
                      source={`contentTo.contentName.${locale}`}
                    ></TextField>
                  </Stack>
                </RecordContextProvider>
              </Grid>
            );
          } else if (!subContentPurpose?.isUse) {
            return (
              <Grid item xs={6} sm={4} md={3} lg={3} key={item.id}>
                <RecordContextProvider value={item} key={item.id}>
                  <Stack
                    onClick={() => onSelect(item)}
                    sx={{
                      width: "100%",
                      padding: theme.spacing(0),
                      justifyContent: "center",
                      "& .MuiStack-root": {
                        backgroundColor: "pink",
                      },
                    }}
                  >
                    <GetFileIcon />

                    <TextField
                      sx={{
                        "& .MuiTypography-root": {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          backgroundColor: "pink",
                          whiteSpace: "nowrap",
                        },
                      }}
                      source={`contentTo.contentName.${locale}`}
                    />
                  </Stack>
                </RecordContextProvider>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  };

  const RenderContentView = () => {
    const { otherProps } = useContentContext();
    const handleSelect = (selectValue, optionValue, handletValue) => {
      console.log("selectValue", selectValue);
      console.log("optionValue", optionValue);
      console.log("handletValue", handletValue);

      const selectedContentName = handletValue?.contentTo?.contentName[locale];
      setRouteNotation(`경로: ${selectedContentName}`);

      otherProps.setSelectContentId(handletValue.contentIdTo);
    };

    const handerFolderFileSelect = (item) => {
      console.log("클릭");
      console.log("contentPurposes", item);
      otherProps.setSelectContentId(item.contentIdTo);
    };

    if (viewMode === "list") {
      console.log("location", location);
      return <ListView onSelect={handleSelect} />;
    } else if (viewMode === "folderFile") {
      return <FolderFileView onSelect={handerFolderFileSelect} />;
    }
  };

  const changeViewMode = (mode) => {
    setViewMode(mode);
  };
  if (!record) return null;

  // 경로 표시를 위한 변수
  const [routeNotation, setRouteNotation] = useState(`경로: ${null} `);

  const goBackPage = () => {
    console.log("뒤로");
    redirect(`Null`);
  };

  console.log("record22", record);
  const folderFileTitle = record?.contentName[locale];

  return (
    <Section
      isHeader={false}
      sx={{
        padding: theme.spacing(0),
      }}
    >
      <SubContentListBase {...contextValue}>
        {/* <SubContentListActions /> */}

        <SubContentActionsBase id={record.id}>
          {/* <Typography sx={{ fontSize: '2rem' }}>{record.id}</Typography> */}
          <TextField source={`record.contentName.${locale}`} />
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {folderFileTitle}
          </Typography>
          <RenderSubFileContentActions />
        </SubContentActionsBase>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Stack direction="row" spacing={0}>
            <KeyboardArrowLeftIcon
              onClick={goBackPage}
              sx={{
                border: "1px solid lightGray",
                backgroundColor: "#F8F8F8",
              }}
            />
            <KeyboardArrowRightIcon
              sx={{
                border: "1px solid lightGray",
                backgroundColor: "#F8F8F8",
              }}
            />
          </Stack>
          <RefreshIcon />
          {/* <RefreshIconButton /> */}
          <Stack
            sx={{
              paddingY: "3px",
              marginLeft: "2px",
              backgroundColor: "#F8F8F8",

              border: "1px solid lightGray",
              flexGrow: 1,
              minWidth: 200,
            }}
          >
            <Typography sx={{ fontSize: "0.8rem" }}>
              {/* 경로: mount - upload - obp-workbench-web - src */}
              {routeNotation}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0}>
            <DehazeIcon
              onClick={() => changeViewMode("list")}
              sx={{
                border: "1px solid lightGray",
                backgroundColor: "#F8F8F8",
              }}
            />

            <AppsIcon
              onClick={() => {
                changeViewMode("folderFile");
              }}
              sx={{
                border: "1px solid lightGray",
                backgroundColor: "#F8F8F8",
              }}
            />
          </Stack>
          <ArrowDropDownIcon
            sx={{
              border: "1px solid lightGray",
              backgroundColor: "#F8F8F8",
            }}
          />
        </Stack>
        {/* <SubContentList /> */}
        <RenderContentView />
        {isOpen && (
          <Lightbox
            mainSrc={selectedImage}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}

        {/* {renderSelectedTypeComponent()} */}
      </SubContentListBase>
    </Section>
  );
};
