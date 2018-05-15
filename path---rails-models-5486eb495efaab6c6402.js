webpackJsonp([5853404935029],{960:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Generating"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Generating"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ rails g model User\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Using models"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Query methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"items = Model\n  .where(first_name: 'Harvey')\n  .where('id = 3')\n  .where('id = ?', 3)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'  .order(:title)\n  .order(title: :desc)\n  .order("title DESC")\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .reorder(:title)  # discards other .order's\n  .rewhere(...)     # discards other .where's\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .limit(2)\n  .offset(1)\n  .uniq\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/querymethods"},children:[{type:"text",value:"QueryMethods"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Advanced query methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"items = Model\n  .select(:id)\n  .select([:id, :name])\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .group(:name)   # GROUP BY name\n  .group('name AS grouped_name, age')\n  .having('SUM(price) > 30')  # needs to be chained with .group\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .includes(:user)\n  .includes(user: [:articles])\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .references(:posts)\n  # aka: .where(\"posts.name = 'foo'\").references(:posts)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Finder methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item = Model.find(id)\nitem = Model.find_by_email(email)\nitem = Model.where(email: email).first\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'Model\n  .exists?(5)\n  .exists?(name: "David")\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  .first\n  .last\n  .find_nth(4, [offset])\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/findermethods"},children:[{type:"text",value:"FinderMethods"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Persistence"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.new_record?\nitem.persisted?\nitem.destroyed?\n\nitem.serialize_hash\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.save\nitem.save!      # Same as above, but raises an Exception\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.update  name: 'John'  # Saves immediately\nitem.update! name: 'John'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.update_column  :name, 'John'  # skips validations and callbacks\nitem.update_columns  name: 'John'\nitem.update_columns! name: 'John'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.touch                 # updates :updated_at\nitem.touch :published_at\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.destroy\nitem.delete  # skips callbacks\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Model.create     # Same an #new then #save\nModel.create!    # Same as above, but raises an Exception\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/persistence"},children:[{type:"text",value:"Persistence"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Attribute Assignment"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.attributes                      # #<Hash>\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.attributes = { name: 'John' }   # Merges attributes in. Doesn't save.\nitem.assign_attributes name: 'John'  # Same as above\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/attributeassignment"},children:[{type:"text",value:"AttributeAssignment"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Dirty"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.changed?\nitem.changed             # ['name']\nitem.changed_attributes  # { 'name' => 'Bob' } - original values\nitem.changes             # { 'name' => ['Bob', 'Robert'] }\nitem.previous_changes    # available after #save\nitem.restore_attributes\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.name = 'Robert'\nitem.name_was         # 'Bob'\nitem.name_change      # [ 'Bob', 'Robert' ]\nitem.name_changed?    # true\nitem.name_changed?(from: 'Bob', to: 'Robert')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activemodel/dirty"},children:[{type:"text",value:"Dirty"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Validations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"item.valid?\nitem.invalid?\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/validations"},children:[{type:"text",value:"Validations"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Calculations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Person.count\nPerson.count(:age)    # counts non-nil's\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Person.average(:age)\nPerson.maximum(:age)\nPerson.minimum(:age)\nPerson.sum('2 * age')\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Person.calculate(:count, :all)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Advanced:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"Person.distinct.count\nPerson.group(:city).count\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://devdocs.io/rails/activerecord/calculations"},children:[{type:"text",value:"Calculations"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Dynamic attribute-based finders"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Given a field called "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"name"}]},{type:"text",value:":"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Returns one record\nPerson.find_by_name(name)\nPerson.find_last_by_name(name)\nPerson.find_or_create_by_name(name)\nPerson.find_or_initialize_by_name(name)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Returns a list of records\nPerson.find_all_by_name(name)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Add a bang to make it raise an exception\nPerson.find_by_name!(name)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# You may use `scoped` instead of `find`\nPerson.scoped_by_user_name\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Associations"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Associations"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"belongs_to"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_one"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_many"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_many :through"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_one :through"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"has_and_belongs_to_many"}]}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Has many"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"belongs_to :parent, :foreign_key => 'parent_id' class_name: 'Folder'\nhas_many :folders, :foreign_key => 'parent_id', class_name: 'Folder'\n\nhas_many :comments,    :order      => \"posted_on\"\nhas_many :comments,    :include    => :author\nhas_many :people,      :class_name => \"Person\"\nhas_many :people,      :conditions => \"deleted = 0\"\nhas_many :tracks,      :order      => \"position\"\nhas_many :comments,    :dependent  => :nullify\nhas_many :comments,    :dependent  => :destroy\nhas_many :tags,        :as         => :taggable\nhas_many :reports,     :readonly   => true\nhas_many :subscribers, :through    => :subscriptions, class_name: \"User\", :source => :user\nhas_many :subscribers, :finder_sql =>\n    'SELECT DISTINCT people.* ' +\n    'FROM people p, post_subscriptions ps ' +\n    'WHERE ps.post_id = #{id} AND ps.person_id = p.id ' +\n    'ORDER BY p.first_name'\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"belongs to"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'belongs_to :author,\n  :dependent      => :destroy    # or :delete\n\n  :class_name     => "Person"\n  :select         => "*"\n  :counter_cache  => true\n  :counter_cache  => :custom_counter\n  :include        => "Book"\n  :readonly       => true\n\n  :conditions     => \'published = true\'\n\n  :touch          => true\n  :touch          => :authors_last_updated_at\n\n  :primary_key    => "name"\n  :foreign_key    => "author_name"\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Many-to-many"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you have a join model:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Programmer < ActiveRecord::Base\n  has_many :assignments\n  has_many :projects, :through => :assignments\nend\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Project < ActiveRecord::Base\n  has_many :assignments\n  has_many :programmers, :through => :assignments\nend\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Assignment\n  belongs_to :project\n  belongs_to :programmer\nend\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Many-to-many (HABTM)"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'has_and_belongs_to_many :projects\nhas_and_belongs_to_many :projects, :include => [ :milestones, :manager ]\nhas_and_belongs_to_many :nations, :class_name => "Country"\nhas_and_belongs_to_many :categories, :join_table => "prods_cats"\nhas_and_belongs_to_many :categories, :readonly => true\nhas_and_belongs_to_many :active_projects, :join_table => \'developers_projects\', :delete_sql =>\n"DELETE FROM developers_projects WHERE active=1 AND developer_id = #{id} AND project_id = #{record.id}"\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Polymorphic associations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Post\n  has_many :attachments, as: :parent\nend\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Image\n  belongs_to :parent, polymorphic: true\nend\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And in migrations:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"create_table :images do |t|\n  t.references :post, polymorphic: true\nend\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Validation"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Validation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Person < ActiveRecord::Base\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"{:.-setup}"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Presence\n  validates :name,     presence: true\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Acceptance\n  validates :terms,    acceptance: true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Confirm\n  validates :email,    confirmation: true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Unique\n  validates :slug,     uniqueness: true\n  validates :slug,     uniqueness: { case_sensitive: false }\n  validates :holiday,  uniqueness: { scope: :year, message: 'yearly only' }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Format\n  validates :code,     format: /regex/\n  validates :code,     format: { with: /regex/ }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Length\n  validates :name,     length: { minimum: 2 }\n  validates :bio,      length: { maximum: 500 }\n  validates :password, length: { in: => 6..20 }\n  validates :number,   length: { is: => 6 }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Include/exclude\n  validates :gender,   inclusion: %w(male female)\n  validates :gender,   inclusion: { in: %w(male female) }\n  validates :lol,      exclusion: %w(xyz)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Numeric\n  validates :points,   numericality: true\n  validates :played,   numericality: { only_integer: true }\n  # ... greater_than, greater_than_or_equal_to,\n  # ... less_than, less_than_or_equal_to\n  # ... odd, even, equal_to\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Validate the associated records to ensure they're valid as well\n  has_many :books\n  validates_associated :books\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'  # Length (full options)\n  validates :content, length: {\n    minimum:   300,\n    maximum:   400,\n    tokenizer: lambda { |str| str.scan(/\\w+/) },\n    too_short: "must have at least %{count} words",\n    too_long:  "must have at most %{count} words" }\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Multiple\n  validates :login, :email, presence: true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  # Conditional\n  validates :description, presence: true, if: :published?\n  validates :description, presence: true, if: lambda { |obj| .. }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"  validates :title, presence: true, on: :save   # :save | :create | :update\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"end\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom validations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Person < ActiveRecord::Base\n  validate :foo_cant_be_nil\n\n  def foo_cant_be_nil\n    errors.add(:foo, 'cant be nil')  if foo.nil?\n  end\nend\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Errors"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'record.errors.valid?      # → false\nrecord.errors             # → { :name => ["can\'t be blank"] }\nrecord.errors.messages    # → { :name => ["can\'t be blank"] }\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"record.errors[:name].any?\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other API"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Callbacks"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://guides.rubyonrails.org/active_record_validations_callbacks.html"},children:[{type:"text",value:"Guides: callbacks"}]}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mass updates"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:'# Updates person id 15\nPerson.update 15, name: "John", age: 24\nPerson.update [1,2], [{name: "John"}, {name: "foo"}]\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Joining"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Basic joins\nStudent.joins(:schools).where(schools: { type: 'public' })\nStudent.joins(:schools).where('schools.type' => 'public' )\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Multiple associations\nArticle.joins(:category, :comments)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Nested assocations\nArticle.joins(comments: :guest)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# SQL\nAuthor.joins(\n  'INNER JOIN posts ' +\n  'ON posts.author_id = authors.id ' +\n  'AND posts.published = \"t\"'\n)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Where interpolation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"where('name = ?', 'John')\nwhere(['name = :name', { name: 'John' }])\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Serialize"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class User < ActiveRecord::Base\n  serialize :preferences\nend\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"user = User.create(\n  preferences: {\n    'background' => 'black',\n    'display' => 'large'\n  }\n)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can also specify a class option as the second parameter that’ll raise an\nexception if a serialized object is retrieved as a descendant of a class not in\nthe hierarchy."}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Only Hash allowed!\nclass User < ActiveRecord::Base\n  serialize :preferences, Hash\nend\n"}]}]},{type:"comment",value:' {data-line="3"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"# Reading it raises SerializationTypeMismatch\nuser = User.create(preferences: %w(one two three))\nUser.find(user.id).preferences\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other tricks"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Overriding accessors"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"class Song < ActiveRecord::Base\n  # Uses an integer of seconds to hold the length of the song\n\n  def length=(minutes)\n    write_attribute(:length, minutes.to_i * 60)\n  end\n\n  def length\n    read_attribute(:length) / 60\n  end\nend\n"}]}]},{type:"comment",value:' {data-line="4,8"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://api.rubyonrails.org/classes/ActiveRecord/Base.html"},children:[{type:"text",value:"http://api.rubyonrails.org/classes/ActiveRecord/Base.html"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Callbacks"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"after_create"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"after_initialize"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"after_validation"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"after_save"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"after_commit"}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Rails models",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-controllers",context:{nodePath:"/rails-controllers",category:"Rails",title:"Controllers"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-helpers",context:{nodePath:"/rails-helpers",category:"Rails",title:"Helpers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-models.md absPath of file >>> MarkdownRemark",nodePath:"/rails-models",nodeType:"sheet",title:"Rails models",category:"Rails",weight:0,updated:null}}}});
//# sourceMappingURL=path---rails-models-5486eb495efaab6c6402.js.map