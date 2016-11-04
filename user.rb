# frozen_string_literal: true
class User
  attr_reader :hoge
  def initialize
    @hoge = [a, b, c, d].join('')
    # にゃーん
  end

  def get_hoge
    @hoge
  end

  def poyo
    1 + 1
  end

  def foo
    hoge do
      bar
    end
  end
end
