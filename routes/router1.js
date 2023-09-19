export const prefix = "/client/:clientId/exam/:examId";

export default [
  {
    id: 1,
    name: "検査TOP",
    url: "/exam-top",
    icon: "HomeIcon"
  },
  {
    id: 2,
    url: undefined,
    name: "基本設定",
    icon: "AdjustmentIcon",
    childs: [
      {
        id: 1,
        url: "/edit-exam",
        name: "検査内容設定",
      },
      {
        id: 2,
        url: "/classification-setting",
        name: "部署設定",
      },
      {
        id: 3,
        url: "/section-setting",
        name: "役職設定",
      },
      {
        id: 4,
        url: "/tag-setting",
        name: "タグ設定",
      },
    ]
  },
  {
    id: 3,
    url: undefined,
    name: "受検者管理",
    icon: "UsersGroup",
    childs: [
      {
        id: 1,
        url: "/exam-top",
        name: "受検者検索",
      },
      {
        id: 2,
        url: "/import-csv",
        name: "CSVインポット",
      },
      {
        id: 3,
        url: "/add-examinee",
        name: "受検者追加",
      },
      {
        id: 4,
        url: "/check-duplicate",
        name: "重複受検者チェック",
      },
    ],
  },
  {
    id: 4,
    url: undefined,
    name: "受検案内メール送信",
    icon: "Mail"
  },
  {
    id: 5,
    url: undefined,
    name: "回答データ出力",
    icon: "ClipboardList"
  },
  {
    id: 6,
    url: undefined,
    name: "その他",
    icon: 'ViewGrid',
    childs: [
      {
        id: 1,
        url: undefined,
        name: "受検状況",
      },
      {
        id: 2,
        url: undefined,
        name: "受検状況通知設定",
      },
    ],
  },
];
