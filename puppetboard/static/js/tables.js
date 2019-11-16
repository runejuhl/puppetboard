(function () {
  var $;

  $ = jQuery;

  $(function () {});

  $('thead th.date').data('sortBy', function (th, td, tablesort) {
    var tdTime = new Date(td.text().replace('-', ''));
    if (isNaN(tdTime)) return 0;
    else return tdTime;
  });

  var defaultSort = $('th.default-sort');
  if (defaultSort.data()) {
    var tablesort = $('table.sortable').tablesort().data('tablesort');
    tablesort.index = defaultSort.index();
    tablesort.sort(defaultSort, 'desc');
  }

  $('input.filter-table').parent('div').removeClass('hide');

  $('input.filter-table').on('keyup', function (e) {
    var ev, rex;
    rex = new RegExp($(this).val(), 'i');
    $('.searchable tr').hide();
    $('.searchable tr').filter(function () {
      return rex.test($(this).text());
    }).show();
    if (e.keyCode === 27) {
      $(e.currentTarget).val('');
      ev = $.Event('keyup');
      ev.keyCode = 13;
      $(e.currentTarget).trigger(ev);
      return e.currentTarget.blur();
    }
  });
}).call(this);
