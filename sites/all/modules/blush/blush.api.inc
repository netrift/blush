<?php
/**
 * @file
 *  Shared API function for blush module
 */

/**
 * Get the splash images.
 */
function blush_api_get_images($nid = 1) {

  $images = array();

  $query = db_select('node', 'n');

  $query->fields('n', array('nid'));
  $query->condition('n.status', 1);
  $query->condition('n.nid', $nid);

  $record  = $query->execute()->fetchObject();;
  $node = node_load($record->nid);
  $node_wrapper = entity_metadata_wrapper('node', $node);
  $values = $node_wrapper->field_images->value();

  foreach ($values as $value) {
    $images[] = array(
      'fid' => $value['fid'],
      'url' => file_create_url($value['uri']),
      'uri' => $value['uri'],
      'alt' => $value['alt'],
      'title' => $value['title'],
    );
  };

  return $images;
}
