export default {
  name: 'mux.videoAsset',
  type: 'object',
  title: 'Video asset',
  fields: [
    {
      type: 'string',
      name: 'status',
    },
    {
      type: 'string',
      name: 'assetId',
    },
    {
      type: 'string',
      name: 'previewAssetId',
    },
    {
      type: 'string',
      name: 'playbackId',
    },
    {
      type: 'string',
      name: 'previewPlaybackId',
    },
    {
      type: 'string',
      name: 'filename',
    },
    {
      type: 'number',
      name: 'thumbTime',
    },
  ],
}
