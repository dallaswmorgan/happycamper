@sites.each do |site|
  json.set! site.id do
    json.partial! 'site', site: site
  end
end
