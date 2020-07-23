<div class="wp">
    <div class="box size">123123</div>
</div>

1. ## 仅居中元素定宽高适用
  # absolute + 负margin
    .wp {
        position: relative;
    }
    .box {
        position: absolute;;
        top: 50%;
        left: 50%;
        width:100px;
        height:100px;
        margin-left: -50px;
        margin-top: -50px;
    }
  # absolute + margin auto
    .wp {
        position: relative;
    }
    .box {
        position: absolute;
        width:100px;
        height:100px;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin: auto;
    }
  # absolute + calc
    .wp {
    position: relative;
    }
    .box {
    position: absolute;;
    width:100px;
    height:100px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    }

2. ## 居中元素不定宽高
  # absolute + transform
    .wp {
      position: relative;
    }
    .box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  # css-table
  .wp {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.box {
    display: inline-block;
}
  # flex
    .wp {
    display: flex;
    justify-content: center;
    align-items: center;
}
  # grid
    .wp {
    display: grid;
    }
    .box {
    align-self: center;
    justify-self: center;
    }