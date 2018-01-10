<?php
get_header();
?>

<div class='content'>
  <div class='left'>
    <div class='content__nav'></div>
  </div>
  <div class='right'>
    <div class='content__body'>
      <div class='content__body__inner'>
      <?php
      $query = new WP_Query(array(
        'post_type' => 'post',
        'orderby' => 'menu_order'
      ));
      if ($query->have_posts()):
        while ($query->have_posts()):
            $query->the_post();
            $title = get_the_title();
            $content = apply_filters('the_content', get_the_content());
      ?>
        <div id='<?php echo str_replace(' ', '', $title); ?>' class='post'>
          <div class='post__title text-regular mobile-show'><?php echo $title; ?></div>
          <div class='post__body text-small'>
            <?php echo $content; ?>
          </div>
        </div>
      <?php
      endwhile;
      endif;
      ?>
        <div class='footer'>
          <a href='http://www.xavier-burrow.com'>xavier-burrow.com</a>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class='content__time text-large noselect'>
    <div class='time'>time →</div>
  </div>
  -->
</div>

<?php
get_footer();
?>
